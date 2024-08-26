// Simulated data
const posts = [
    { 
        id: 1, 
        title: 'What is Data Structure?', 
        author: 'Rahman', 
        date: 'August 23, 2024', 
        link: 'fullpost.html?id=1', 
        category: 'Data Structures (Basic)', 
        contentPath: 'blog_content/blog1/blog1.html',
        summary: 'An overview of what data structures are, their importance, and basic types used in computer science.',
        image: 'blog_content/blog1/blog1_image.jpg'
    },
    { 
        id: 2, 
        title: 'Data Type', 
        author: 'Rahman', 
        date: 'August 22, 2024', 
        link: 'fullpost.html?id=2', 
        category: 'Data Structures (Basic)', 
        contentPath: 'blog_content/blog2/blog2.html',
        summary: 'A detailed explanation of different data types, their uses, and how they are implemented in programming.',
        image: 'blog_content/blog2/blog2_image.jpg'
    },
    { 
        id: 3, 
        title: 'Big O Notation', 
        author: 'Rahman', 
        date: 'August 22, 2024', 
        link: 'fullpost.html?id=3', 
        category: 'Data Structures (Basic)', 
        contentPath: 'blog_content/blog3/blog3.html',
        summary: 'Understanding Big O Notation and its role in evaluating the efficiency of algorithms.',
        image: 'blog_content/blog3/blog3_image.avif'
    },
    { 
        id: 4, 
        title: 'Array', 
        author: 'Rahman', 
        date: 'August 22, 2024', 
        link: 'fullpost.html?id=4', 
        category: 'Data Structures (Basic)', 
        contentPath: 'blog_content/blog4/blog4.html',
        summary: 'An introduction to arrays, including their properties, types, and common operations.',
        image: 'blog_content/blog4/blog4_image.jpg'
    },
    { 
        id: 5, 
        title: 'Stack', 
        author: 'Rahman', 
        date: 'August 22, 2024', 
        link: 'fullpost.html?id=5', 
        category: 'Data Structures (Basic)', 
        contentPath: 'blog_content/blog5/blog5.html',
        summary: 'Exploring the stack data structure, its operations, and real-world applications.',
        image: 'blog_content/blog5/blog5_image.webp'
    },
    { 
        id: 6, 
        title: 'Queue', 
        author: 'Rahman', 
        date: 'August 24, 2024', 
        link: 'fullpost.html?id=6', 
        category: 'Data Structures (Basic)', 
        contentPath: 'blog_content/blog6/blog6.html',
        summary: 'Understanding the queue data structure, its FIFO principle, and common use cases.',
        image: 'blog_content/blog6/blog6_image.webp'
    },
    { 
        id: 7, 
        title: 'Linked List', 
        author: 'Rahman', 
        date: 'August 24, 2024', 
        link: 'fullpost.html?id=7', 
        category: 'Data Structures (Advanced)', 
        contentPath: 'blog_content/blog7/blog7.html',
        summary: 'Exploring linked lists, their types (singly, doubly, and circular), and their advantages over arrays.',
        image: 'blog_content/blog7/blog7_image.webp'
    },
    { 
        id: 8, 
        title: 'Graph', 
        author: 'Rahman', 
        date: 'August 25, 2024', 
        link: 'fullpost.html?id=8', 
        category: 'Data Structures (Advanced)', 
        contentPath: 'blog_content/blog8/blog8.html',
        summary: 'Understanding graphs, their representations (adjacency matrix, adjacency list), and common algorithms (BFS, DFS).',
        image: 'blog_content/blog8/blog8_image.webp'
    },
    { 
        id: 9, 
        title: 'Binary Tree', 
        author: 'Rahman', 
        date: 'August 25, 2024', 
        link: 'fullpost.html?id=9', 
        category: 'Data Structures (Advanced)', 
        contentPath: 'blog_content/blog9/blog9.html',
        summary: 'An introduction to binary trees, their properties, and various types (full, complete, balanced, etc.).',
        image: 'blog_content/blog9/blog9_image.webp'
    },
    { 
        id: 10, 
        title: 'Binary Search Tree', 
        author: 'Rahman', 
        date: 'August 25, 2024', 
        link: 'fullpost.html?id=10', 
        category: 'Data Structures (Advanced)', 
        contentPath: 'blog_content/blog10/blog10.html',
        summary: 'Explaining binary search trees, their properties, and operations (insertion, deletion, searching).',
        image: 'blog_content/blog10/blog10_image.webp'
    },
    { 
        id: 11, 
        title: 'AVL Tree', 
        author: 'Rahman', 
        date: 'August 26, 2024', 
        link: 'fullpost.html?id=11', 
        category: 'Data Structures (Advanced)', 
        contentPath: 'blog_content/blog11/blog11.html',
        summary: 'Understanding AVL trees, their balance property, and how rotations are used to maintain balance.',
        image: 'blog_content/blog11/blog11_image.webp'
    },
    { 
        id: 12, 
        title: 'Trie', 
        author: 'Rahman', 
        date: 'August 26, 2024', 
        link: 'fullpost.html?id=12', 
        category: 'Data Structures (Advanced)', 
        contentPath: 'blog_content/blog12/blog12.html',
        summary: 'A deep dive into Tries, their structure, operations, and applications in string management.',
        image: 'blog_content/blog12/blog12_image.webp'
    }
];

// Simulated categories data
const categories = ['Data Structures (Basic)', 'Data Structures (Advanced)', 'Sorting Algorithms', 'Dynamic Programming', 'Object-Oriented Programming'];
