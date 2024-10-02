// Simulated data
const posts = [
    { 
        id: 1, 
        title: 'Subsets', 
        author: 'Rahman', 
        date: 'October 2, 2024', 
        link: 'fullpost.html?id=1', 
        category: 'Backtracking', 
        contentPath: 'blog_content/blog1/blog1.html',
        summary: 'An overview of Subset generating by using leetcode problem',
        image: 'blog_content/blog1/blog1_image.png',
        tags: ['Data Structures', 'Basics']
    },
    { 
        id: 2, 
        title: 'Permutations', 
        author: 'Rahman', 
        date: 'August 22, 2024', 
        link: 'fullpost.html?id=2', 
        category: 'Backtracking', 
        contentPath: 'blog_content/blog2/blog2.html',
        summary: 'A detailed explanation of different data types, their uses, and how they are implemented in programming.',
        image: 'blog_content/blog2/blog2_image.jpg',
        tags: ['Data Types']
    },
    { 
        id: 3, 
        title: 'Generate Parentheses', 
        author: 'Rahman', 
        date: 'August 22, 2024', 
        link: 'fullpost.html?id=3', 
        category: 'Backtracking', 
        contentPath: 'blog_content/blog3/blog3.html',
        summary: 'Understanding Big O Notation and its role in evaluating the efficiency of algorithms.',
        image: 'blog_content/blog3/blog3_image.avif'
    },
    { 
        id: 4, 
        title: 'Combination Sum', 
        author: 'Rahman', 
        date: 'August 22, 2024', 
        link: 'fullpost.html?id=4', 
        category: 'Backtracking', 
        contentPath: 'blog_content/blog4/blog4.html',
        summary: 'An introduction to arrays, including their properties, types, and common operations.',
        image: 'blog_content/blog4/blog4_image.jpg'
    },
    { 
        id: 5, 
        title: 'Word Search', 
        author: 'Rahman', 
        date: 'August 22, 2024', 
        link: 'fullpost.html?id=5', 
        category: 'Backtracking', 
        contentPath: 'blog_content/blog5/blog5.html',
        summary: 'Exploring the stack data structure, its operations, and real-world applications.',
        image: 'blog_content/blog5/blog5_image.webp'
    },
    { 
        id: 6, 
        title: 'Sudoku Solver', 
        author: 'Rahman', 
        date: 'August 24, 2024', 
        link: 'fullpost.html?id=6', 
        category: 'Backtracking', 
        contentPath: 'blog_content/blog6/blog6.html',
        summary: 'Understanding the queue data structure, its FIFO principle, and common use cases.',
        image: 'blog_content/blog6/blog6_image.webp'
    },
    { 
        id: 7, 
        title: 'N-Queens', 
        author: 'Rahman', 
        date: 'August 24, 2024', 
        link: 'fullpost.html?id=7', 
        category: 'Backtracking', 
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
        image: 'blog_content/blog8/blog8_image.jpg'
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
        image: 'blog_content/blog9/blog9_image.png'
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
        image: 'blog_content/blog10/blog10_image.jpeg'
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
        image: 'blog_content/blog11/blog11_image.png'
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
        image: 'blog_content/blog12/blog12_image.png'
    },
    { 
        id: 13, 
        title: 'What is Object-Oriented Programming?', 
        author: 'Rahman', 
        date: 'August 26, 2024', 
        link: 'fullpost.html?id=13', 
        category: 'Object-Oriented Programming', 
        contentPath: 'blog_content/blog13/blog13.html',
        summary: 'An introduction to object-oriented programming, including its core principles and benefits.',
        image: 'blog_content/blog13/blog13_image.avif'
    },
    { 
        id: 14, 
        title: 'Encapsulation', 
        author: 'Rahman', 
        date: 'August 27, 2024', 
        link: 'fullpost.html?id=14', 
        category: 'Object-Oriented Programming', 
        contentPath: 'blog_content/blog14/blog14.html',
        summary: 'Explaining encapsulation, its importance in OOP, and how it helps in data hiding and abstraction.',
        image: 'blog_content/blog14/blog14_image.jpg'
    },
    { 
        id: 15, 
        title: 'Inheritance', 
        author: 'Rahman', 
        date: 'August 27, 2024', 
        link: 'fullpost.html?id=15', 
        category: 'Object-Oriented Programming', 
        contentPath: 'blog_content/blog15/blog15.html',
        summary: 'A detailed look at inheritance, how it promotes code reuse, and examples of inheritance in different programming languages.',
        image: 'blog_content/blog15/blog15_image.jpg'
    },
    { 
        id: 16, 
        title: 'Polymorphism', 
        author: 'Rahman', 
        date: 'August 28, 2024', 
        link: 'fullpost.html?id=16', 
        category: 'Object-Oriented Programming', 
        contentPath: 'blog_content/blog16/blog16.html',
        summary: 'Understanding polymorphism, its types, and how it enhances flexibility and functionality in OOP.',
        image: 'blog_content/blog16/blog16_image.png',
        tags: ['OOP']
    },
    {
        id: 140,
        title: 'Longest Common Prefix',
        author: 'Rahman',
        date: 'October 2, 2024',
        link: 'fullpost.html?id=18',
        category: 'Trie',
        contentPath: 'blog_content/blog18/blog18.html',
        summary: 'Using trie Data structure how to solve problem, you will learn',
        image: 'blog_content/blog18/blog18_image.png',
        tags: ['Algorithms', 'Shortest Path', 'Priority Queue']
    }
    
];

// Simulated categories data
const categories = [
    'Data Structures (Basic)', 
    'Data Structures (Advanced)', 
    'Sorting Algorithms', 
    'Dynamic Programming', 
    'Object-Oriented Programming',
    'Algorithm'
];
