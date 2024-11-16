import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from 'lucide-react'
import { Icons } from '../components/icons'

export const DATA = {
   name: 'Sandilya Kambhampati',
   initials: 'SK',
   url: 'https://nyxb.nexus',
   location: 'Fishers, Indiana',
   locationLink: 'https://www.google.com/maps/place/Fishers,+IN/@39.9639955,-86.0516691,12z/data=!3m1!4b1!4m6!3m5!1s0x8814b377e061fed9:0x5c70915098c7503b!8m2!3d39.9568857!4d-86.0171742!16zL20vMHNseHA?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D',
   description:
    'Aspiring Computer Science and Data Science student',
   summary:
    'I am the Co-Founder and CTO of [Joypix](https://joypix.io). \n\n'
    + 'Creator of [Nyxb UI](https://nyxbui.design), [Conventional Emoji Commits](https://conventional-emoji-commits.site) and [others](https://nyxb.nexus/projects).\n\n'
    + 'Dreaming up ideas and nurturing them to reality, especially in the realm of education, is where my passion lies.\n\n'
    + 'Outside of programming, I have a diverse set of hobbies that include:\n'
    + '- Traveling with my wife and kids\n'
    + '- Shooting with handguns at my local club\n'
    + '- Practicing archery\n\n'
    + 'If you happen to be in the same city I reside in (currently Hamburg), perhaps we could meet up. We could:\n'
    + '- Share a coffee\n'
    + '- Discuss coding\n'
    + '- Plan a day at the shooting range or archery field\n\n'
    + 'It\'s always great to connect with like-minded individuals and share our passions.',
   avatarUrl: '/me.png',
   skills: [
      'React',
      'Next.js',
      'Typescript',
      'Node.js',
      'Python',
      'R',
      'Javascript',
      'C',
      'Postgres',
      'Firebase',
   ],
   navbar: [
      { href: '/', icon: HomeIcon, label: 'Home' },
      { href: '/blog', icon: NotebookIcon, label: 'Blog' },
      { href: '#projects', icon: CodeIcon, label: 'Projects' },
      { href: '#contact', icon: PencilLine, label: 'Contact' },
   ],
   contact: {
      email: 'kprsandilya@gmail.com',
      tel: '+4632069053',
      social: {
         GitHub: {
            name: 'GitHub',
            url: 'https://github.com/kprsandilya',
            icon: Icons.github,

            navbar: true,
         },
         LinkedIn: {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/kprsandilya/',
            icon: Icons.linkedin,

            navbar: true,
         },
         X: {
            name: 'X',
            url: 'https://nyxb.link/x',
            icon: Icons.x,

            navbar: false,
         },
         Youtube: {
            name: 'Youtube',
            url: 'https://nyxb.link/yt',
            icon: Icons.youtube,
            navbar: false,
         },
         email: {
            name: 'Send Email',
            url: '#',
            icon: Icons.email,

            navbar: false,
         },
      },
   },

   work: [
      {
         company: ' Bureau of Cyberspace and Digital Policy, U.S. Dept of State',
         href: 'https://www.state.gov/bureaus-offices/deputy-secretary-of-state/bureau-of-cyberspace-and-digital-policy/',
         badges: [],
         location: 'Remote',
         title: 'Intern',
         logoUrl: '/State.png',
         start: 'Sept 2024',
         end: 'Present',
         description: '• Collaborating with U.S. diplomats on initiatives advancing U.S. cyber and digital policies globally\n • Contributing to global cybersecurity awareness campaigns and diplomatic efforts to counter cyber adversaries\n • Conducting open-source research and analysis to support the development and implementation of U.S. digital policies',
      },
      {
         company: ' The Data Mine, Purdue University',
         href: 'https://datamine.purdue.edu/',
         badges: [],
         location: 'West Lafayette, Indiana',
         title: 'Undergraduate Data Science Researcher',
         logoUrl: '/Purdue.svg',
         start: 'Aug 2024',
         end: 'Present',
         description:
        '• Utilizing Python and ISIMIP data to analyze netCDF data and map Midwest regions with future climate patterns\n• Mapping critical climate regions based on the Koppen-Geiger climate classifications using data visualization',
      },
      {
         company: 'Texavi',
         href: 'https://texavi.com/',
         badges: [],
         location: 'Remote',
         title: 'Software Development Intern',
         logoUrl: '/Texavi.png',
         start: 'Jun 2024',
         end: 'Aug 2024',
         description:
        '• Developed a dynamic content management system using WordPress for a UK-based archery organization, ensuring seamless updates and user engagement\n• Implemented email management strategies to streamline communication with the customer base, while optimizing web structure for improved user experience and navigation',
      },
      {
         company: 'Firestone Ride Rite',
         href: 'https://www.firestoneairide.com/automotive/aftermarket/',
         badges: [],
         location: 'Fishers, Indiana',
         title: 'Engineering Intern',
         logoUrl: '/Firestone.svg',
         start: 'Jun 2022',
         end: 'Jul 2022',
         description:
        '• Shadowed key departments across the warehouse such as Customer Service, Product Installation, and Manufacturing\n• Created Excel spreadsheets to test air springs, help with warranty procedures, and record information for future testing',
      },
   ],
   education: [
      {
         school: 'Purdue University',
         href: 'https://en.wikipedia.org/wiki/Purdue_University',
         degree: 'Bachelors in Science',
         logoUrl: '/Purdue.svg',
         start: '2023',
         end: '2027',
      },
   ],
   projects: [
      {
         title: 'Conventional Emoji Commits',
         href: 'https://conventional-emoji-commits.site',
         dates: 'Oct 2023 - Present',
         active: true,
         description:
        'A specification for adding human and machine readable meaning to commit messages using color-rich emojis 🌈',
         technologies: [
            'git',
            'emoji',
            'commit',
            'conventional',
            'nuxt',
         ],
         links: [
            {
               type: 'Website',
               href: 'https://conventional-emoji-commits.site',
               icon: <Icons.smile className="size-3" />,
            },
            {
               type: 'Source',
               href: 'https://github.com/conventional-emoji-commits/conventional-emoji-commits.site',
               icon: <Icons.github className="size-3" />,
            },
         ],
         image: '',
         video:
        'https://cdn.nyxbui.design/conventional-emoji-commits.mp4',
      },
      {
         title: 'Nyxb UI',
         href: 'https://magicui.design',
         dates: 'June 2023 - Present',
         active: true,
         description:
        'Fusion UI library combining Shadcn/UI and MagicUI. Featuring 150+ free and open-source components built with React, Typescript, Tailwind CSS, and Framer Motion. Create stunning, responsive interfaces effortlessly. 100% open-source.',
         technologies: [
            'Next.js',
            'Typescript',
            'TailwindCSS',
            'Nyxb UI',
         ],
         links: [
            {
               type: 'Website',
               href: 'https://nyxbui.design',
               icon: <Icons.globe className="size-3" />,
            },
            {
               type: 'Source',
               href: 'https://github.com/magicuidesign/magicui',
               icon: <Icons.github className="size-3" />,
            },
         ],
         image: '',
         video: 'https://cdn.nyxbui.design/bento-grid.mp4',
      },
      {
         title: 'More Projects',
         href: 'https://nyxb.nexus/projects',
         dates: '',
         active: true,
         description:
        'Explore many more projects here.',
         technologies: [],
         links: [
            {
               type: 'Website',
               href: 'https://nyxb.nexus/projects',
               icon: <Icons.globe className="size-3" />,
            },
         ],
         image: '',
         video: 'https://cdn.nyxbui.design/more-projects.mp4',
      },
   ],
   hackingEvents: [
      {
         title: 'HackerOne Live Hacking Event',
         dates: 'June 14th - 16th, 2022',
         location: 'Las Vegas, Nevada',
         description:
        'Participated in a live hacking event, uncovering security vulnerabilities in various web applications.',
         image:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAATlBMVEVHcEwHBwcDAwMAAAAAAAAAAAB6enoXFxcAAAAAAAAAAAAAAAABAQETExPBwcEiIiKdnZ1DQ0NYWFjS0tL39/f///9JSUnFxcXFxcX///8JH38iAAAAGnRSTlMAlfLQSv8HlylrPzWs+y7qeuW1WQ4zep2JBO1Yg5cAAABnSURBVHgB3Yy1AcAwDARN5zDz/oOGm4AW8DWCB3WjjXVKAtBeFomCE+MkSQXRJxbMv5jlBuBXTAoQRJUaZLGsoKqk2rppu1YS+27otSTu+ChosaEYr200NC+xm+by2sp56tSLZfluG3lXBtEeABadAAAAAElFTkSuQmCC',
         links: [
            {
               title: 'Event Details',
               icon: <Icons.globe className="size-4" />,
               href: 'https://www.hackerone.com/resources/hackerone/live-hacking-event-invitations-2022-guide',
            },
         ],
      },
   ],
} as const
