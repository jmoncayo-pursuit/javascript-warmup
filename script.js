// JavaScript Warmup - Interactive Learning Game
class JavaScriptWarmup {
    constructor() {
        this.currentLevel = 1;
        this.completedLevels = new Set();
        this.streak = 0;
        this.showHint = false;
        this.feedback = null;
        this.showLevelSelector = false;
        
        this.levels = this.initializeLevels();
        this.initializeEventListeners();
        this.updateUI();
    }

    initializeLevels() {
        return [
            {
                id: 1,
                title: "Hello World",
                description: "Welcome to JavaScript! Let's start with the traditional first program.",
                task: "Write a program that prints 'Hello, World!' to the console.",
                starterCode: "// Write your code here\n",
                expectedOutput: "Hello, World!",
                hint: "Use console.log() with the text in quotes: console.log('Hello, World!')",
                solution: "console.log('Hello, World!')"
            },
            {
                id: 2,
                title: "Variables and Numbers",
                description: "Learn to store and work with numbers using variables.",
                task: "Create a variable called 'age' with value 25, then print it.",
                starterCode: "// Create a variable and print it\n",
                expectedOutput: "25",
                hint: "Create a variable: let age = 25, then print it: console.log(age)",
                solution: "let age = 25;\nconsole.log(age)"
            },
            {
                id: 3,
                title: "String Variables",
                description: "Work with text data using string variables.",
                task: "Create a variable called 'name' with your name, then print 'Hello, [name]!'",
                starterCode: "// Create a string variable\n",
                expectedOutput: "Hello, JavaScript!",
                hint: "Use template literals: console.log(`Hello, ${name}!`)",
                solution: "let name = 'JavaScript';\nconsole.log(`Hello, ${name}!`)"
            },
            {
                id: 4,
                title: "User Input",
                description: "Learn to get input from users and respond.",
                task: "Ask for the user's favorite color and print 'Your favorite color is [color]'",
                starterCode: "// Get user input and respond\n",
                expectedOutput: "Your favorite color is blue",
                hint: "Use prompt() to get user input: let color = prompt('What is your favorite color?')",
                solution: "let color = prompt('What is your favorite color?');\nconsole.log(`Your favorite color is ${color}`)"
            },
            {
                id: 5,
                title: "Basic Math",
                description: "Perform mathematical operations in JavaScript.",
                task: "Calculate 15 + 27 and print the result.",
                starterCode: "// Calculate and print the sum\n",
                expectedOutput: "42",
                hint: "Use the + operator: console.log(15 + 27)",
                solution: "console.log(15 + 27)"
            },
            {
                id: 6,
                title: "Conditionals",
                description: "Make decisions in your code with if statements.",
                task: "Check if the number 10 is greater than 5. If true, print 'Yes, 10 is greater than 5'",
                starterCode: "// Use an if statement\nlet number = 10;\n",
                expectedOutput: "Yes, 10 is greater than 5",
                hint: "Use if statement: if (number > 5) { console.log('Yes, 10 is greater than 5') }",
                solution: "let number = 10;\nif (number > 5) {\n    console.log('Yes, 10 is greater than 5');\n}"
            },
            {
                id: 7,
                title: "For Loops",
                description: "Repeat actions using for loops.",
                task: "Print numbers from 1 to 3 using a for loop.",
                starterCode: "// Use a for loop to print numbers\n",
                expectedOutput: "1\n2\n3",
                hint: "Use for loop: for (let i = 1; i <= 3; i++) { console.log(i) }",
                solution: "for (let i = 1; i <= 3; i++) {\n    console.log(i);\n}"
            },
            {
                id: 8,
                title: "While Loops",
                description: "Use while loops for conditional repetition.",
                task: "Print numbers from 1 to 3 using a while loop.",
                starterCode: "// Use a while loop\nlet count = 1;\n",
                expectedOutput: "1\n2\n3",
                hint: "Increment count each iteration: while (count <= 3) { console.log(count); count++ }",
                solution: "let count = 1;\nwhile (count <= 3) {\n    console.log(count);\n    count++;\n}"
            },
            {
                id: 9,
                title: "Arrays Basics",
                description: "Store multiple items in arrays.",
                task: "Create an array with fruits ['apple', 'banana', 'orange'] and print the second item.",
                starterCode: "// Create an array and access items\n",
                expectedOutput: "banana",
                hint: "Arrays use zero-based indexing: fruits[1] gets the second item",
                solution: "let fruits = ['apple', 'banana', 'orange'];\nconsole.log(fruits[1]);"
            },
            {
                id: 10,
                title: "Array Operations",
                description: "Add and modify array items.",
                task: "Create an array [1, 2, 3], add the number 4, then print the entire array.",
                starterCode: "// Create array and add item\n",
                expectedOutput: "[1, 2, 3, 4]",
                hint: "Use push() method: numbers.push(4), then console.log(numbers)",
                solution: "let numbers = [1, 2, 3];\nnumbers.push(4);\nconsole.log(numbers);"
            },
            {
                id: 11,
                title: "Functions Basics",
                description: "Create reusable code with functions.",
                task: "Define a function called 'greet' that prints 'Hello!' and then call it.",
                starterCode: "// Define and call a function\n",
                expectedOutput: "Hello!",
                hint: "Use function keyword: function greet() { console.log('Hello!') }, then call greet()",
                solution: "function greet() {\n    console.log('Hello!');\n}\n\ngreet();"
            },
            {
                id: 12,
                title: "Functions with Parameters",
                description: "Pass data to functions using parameters.",
                task: "Create a function 'sayHello' that takes a name parameter and prints 'Hello, [name]!'. Call it with 'World'.",
                starterCode: "// Function with parameter\n",
                expectedOutput: "Hello, World!",
                hint: "function sayHello(name) { console.log(`Hello, ${name}!`) }, then call sayHello('World')",
                solution: "function sayHello(name) {\n    console.log(`Hello, ${name}!`);\n}\n\nsayHello('World');"
            },
            {
                id: 13,
                title: "Objects",
                description: "Store key-value pairs using objects.",
                task: "Create an object with person info: name='Alice', age=30. Print the name.",
                starterCode: "// Create and use an object\n",
                expectedOutput: "Alice",
                hint: "Use curly braces: let person = {name: 'Alice', age: 30}, access with person.name",
                solution: "let person = {name: 'Alice', age: 30};\nconsole.log(person.name);"
            },
            {
                id: 14,
                title: "String Methods",
                description: "Manipulate strings with built-in methods.",
                task: "Take the string 'javascript programming' and print it in uppercase.",
                starterCode: "// Use string methods\nlet text = 'javascript programming';\n",
                expectedOutput: "JAVASCRIPT PROGRAMMING",
                hint: "Use the toUpperCase() method: text.toUpperCase()",
                solution: "let text = 'javascript programming';\nconsole.log(text.toUpperCase());"
            },
            {
                id: 15,
                title: "Final Challenge",
                description: "Combine everything you've learned!",
                task: "Create an array of numbers [1,2,3,4,5], use a for loop to print each number multiplied by 2.",
                starterCode: "// Final challenge - combine concepts\n",
                expectedOutput: "2\n4\n6\n8\n10",
                hint: "Loop through the array: for (let num of numbers) { console.log(num * 2) }",
                solution: "let numbers = [1, 2, 3, 4, 5];\nfor (let num of numbers) {\n    console.log(num * 2);\n}"
            }
        ];
    }

    initializeEventListeners() {
        // Level selector
        document.getElementById('level-selector-btn').addEventListener('click', () => {
            this.toggleLevelSelector();
        });

        document.getElementById('close-modal').addEventListener('click', () => {
            this.toggleLevelSelector();
        });

        // Code editor controls
        document.getElementById('run-btn').addEventListener('click', () => {
            this.handleSubmit();
        });

        document.getElementById('reset-btn').addEventListener('click', () => {
            this.handleReset();
        });

        // Hint toggle
        document.getElementById('hint-toggle').addEventListener('click', () => {
            this.toggleHint();
        });

        // Navigation
        document.getElementById('prev-btn').addEventListener('click', () => {
            if (this.currentLevel > 1) {
                this.changeLevel(this.currentLevel - 1);
            }
        });

        document.getElementById('next-btn').addEventListener('click', () => {
            if (this.completedLevels.has(this.currentLevel) && this.currentLevel < this.levels.length) {
                this.changeLevel(this.currentLevel + 1);
            }
        });

        // Modal backdrop click
        document.getElementById('level-modal').addEventListener('click', (e) => {
            if (e.target.id === 'level-modal') {
                this.toggleLevelSelector();
            }
        });
    }

    toggleLevelSelector() {
        this.showLevelSelector = !this.showLevelSelector;
        const modal = document.getElementById('level-modal');
        
        if (this.showLevelSelector) {
            modal.classList.add('show');
            this.populateLevelGrid();
        } else {
            modal.classList.remove('show');
        }
    }

    populateLevelGrid() {
        const grid = document.getElementById('level-grid');
        grid.innerHTML = '';

        this.levels.forEach(level => {
            const isCompleted = this.completedLevels.has(level.id);
            const isLocked = level.id > Math.max(1, Math.max(...Array.from(this.completedLevels)) + 1);
            const isCurrentLevel = level.id === this.currentLevel;

            const card = document.createElement('div');
            card.className = `level-card ${isCompleted ? 'completed' : ''} ${isCurrentLevel ? 'current' : ''} ${isLocked ? 'locked' : ''}`;
            
            card.innerHTML = `
                <div class="level-card-header">
                    <span class="level-number">Level ${level.id}</span>
                    ${isCompleted ? '<i class="fas fa-check-circle"></i>' : isLocked ? '<i class="fas fa-lock"></i>' : ''}
                </div>
                <h3>${level.title}</h3>
                <p>${level.description}</p>
            `;

            if (!isLocked) {
                card.addEventListener('click', () => {
                    this.changeLevel(level.id);
                    this.toggleLevelSelector();
                });
            }

            grid.appendChild(card);
        });
    }

    changeLevel(levelId) {
        this.currentLevel = levelId;
        const level = this.levels.find(l => l.id === levelId);
        
        // Update code editor
        document.getElementById('code-editor').value = level.starterCode;
        
        // Reset hint and feedback
        this.showHint = false;
        this.feedback = null;
        
        this.updateUI();
    }

    toggleHint() {
        this.showHint = !this.showHint;
        this.updateUI();
    }

    handleReset() {
        const level = this.levels.find(l => l.id === this.currentLevel);
        document.getElementById('code-editor').value = level.starterCode;
        this.feedback = null;
        this.showHint = false;
        this.updateUI();
    }

    async handleSubmit() {
        const level = this.levels.find(l => l.id === this.currentLevel);
        const userCode = document.getElementById('code-editor').value;

        // Set loading state
        this.feedback = {
            type: 'loading',
            message: '🤔 Evaluating your code...'
        };
        this.updateUI();

        try {
            // Execute the code in a safe environment
            const output = this.executeCode(userCode);
            const isCorrect = this.compareOutput(output, level.expectedOutput);

            if (isCorrect) {
                this.completedLevels.add(this.currentLevel);
                this.streak++;
                this.feedback = {
                    type: 'success',
                    message: '🎉 Excellent! You completed this level!',
                    output: output
                };
            } else {
                this.streak = 0;
                this.feedback = {
                    type: 'error',
                    message: 'Not quite right. Let\'s review your solution:',
                    output: output,
                    expected: level.expectedOutput,
                    explanation: level.hint
                };
            }
        } catch (error) {
            this.streak = 0;
            this.feedback = {
                type: 'error',
                message: 'Error in your code:',
                explanation: error.message
            };
        }

        this.updateUI();
    }

    executeCode(code) {
        const outputs = [];
        const originalConsoleLog = console.log;
        
        // Override console.log to capture output
        console.log = (...args) => {
            outputs.push(args.join(' '));
        };

        try {
            // Create a safe execution environment
            const safeEval = new Function(code);
            safeEval();
        } catch (error) {
            console.log = originalConsoleLog;
            throw error;
        }

        // Restore original console.log
        console.log = originalConsoleLog;
        
        return outputs.join('\n');
    }

    compareOutput(actual, expected) {
        // Normalize line endings and trim whitespace
        const normalize = (str) => str.replace(/\r\n/g, '\n').trim();
        return normalize(actual) === normalize(expected);
    }

    updateUI() {
        const level = this.levels.find(l => l.id === this.currentLevel);
        
        // Update header
        document.getElementById('current-level').textContent = this.currentLevel;
        document.getElementById('progress-text').textContent = `${this.completedLevels.size}/${this.levels.length} Levels`;
        document.getElementById('streak-count').textContent = this.streak;
        
        // Update progress bar
        const progressPercentage = (this.completedLevels.size / this.levels.length) * 100;
        document.getElementById('progress-percentage').textContent = `${Math.round(progressPercentage)}%`;
        document.getElementById('progress-fill').style.width = `${progressPercentage}%`;
        
        // Update level content
        document.getElementById('level-title').textContent = `Level ${this.currentLevel}: ${level.title}`;
        document.getElementById('level-description').textContent = level.description;
        document.getElementById('level-task').textContent = level.task;
        document.getElementById('hint-text-content').textContent = level.hint;
        
        // Update completion icon
        const completionIcon = document.getElementById('completion-icon');
        if (this.completedLevels.has(this.currentLevel)) {
            completionIcon.classList.remove('hidden');
        } else {
            completionIcon.classList.add('hidden');
        }
        
        // Update hint section
        const hintContent = document.getElementById('hint-content');
        const hintText = document.getElementById('hint-text');
        
        if (this.showHint) {
            hintContent.classList.remove('hidden');
            hintText.textContent = 'Hide Hint';
        } else {
            hintContent.classList.add('hidden');
            hintText.textContent = 'Show Hint';
        }
        
        // Update feedback
        this.updateFeedback();
        
        // Update navigation
        this.updateNavigation();
    }

    updateFeedback() {
        const container = document.getElementById('feedback-container');
        
        if (!this.feedback) {
            container.classList.add('hidden');
            return;
        }
        
        container.className = `feedback-container ${this.feedback.type}`;
        container.classList.remove('hidden');
        
        let html = `<div class="feedback-message">${this.feedback.message}</div>`;
        
        if (this.feedback.explanation) {
            html += `<div class="feedback-explanation">${this.feedback.explanation}</div>`;
        }
        
        if (this.feedback.output) {
            html += `
                <div class="output-section">
                    <div class="output-label">Your output:</div>
                    <div class="output-code">${this.feedback.output}</div>
                </div>
            `;
        }
        
        if (this.feedback.expected) {
            html += `
                <div class="output-section">
                    <div class="output-label">Expected output:</div>
                    <div class="output-code">${this.feedback.expected}</div>
                </div>
            `;
        }
        
        if (this.feedback.explanation && this.feedback.type === 'error') {
            html += `
                <div class="tip-section">
                    <strong>Tip:</strong> ${this.feedback.explanation}
                </div>
            `;
        }
        
        container.innerHTML = html;
    }

    updateNavigation() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const levelIndicator = document.getElementById('level-indicator-text');
        
        // Previous button
        prevBtn.disabled = this.currentLevel === 1;
        
        // Next button
        const canGoNext = this.completedLevels.has(this.currentLevel) && this.currentLevel < this.levels.length;
        nextBtn.disabled = !canGoNext;
        
        // Level indicator
        levelIndicator.textContent = `Level ${this.currentLevel} of ${this.levels.length}`;
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new JavaScriptWarmup();
}); 