# GitHub Notes

## What is GitHub?
- GitHub is a website where people share and work on code together.
- It uses Git to keep track of changes in code.
- You can store your code online, invite others to help, and review changes.
- It's free for public projects and paid for private ones.
- Owned by Microsoft since 2018.

## Common Git Commands (for GitHub)
Git is the tool behind GitHub. Here are simple commands with explanations. **Important ones are marked with **.

### Start a Project
- `git init`: Start a new project in your folder. **Important** - Do this first for any new project.
  - Example: `git init`

- `git clone <url>`: Copy a project from GitHub to your computer. **Important** - Use to get code from others.
  - Example: `git clone https://github.com/user/repo.git`

- `git config --global user.name "Your Name"`: Tell Git your name. **Important** - Set once to identify your commits.
  - Example: `git config --global user.name "John Doe"`

- `git config --global user.email "email@example.com"`: Tell Git your email. **Important** - Set once to link commits to you.
  - Example: `git config --global user.email "john@example.com"`

### Save Your Work
- `git add <file>`: Prepare a file to save. **Important** - Must do before committing.
  - Example: `git add file.txt`
  - `git add .`: Prepare all files.

- `git commit -m "note"`: Save your changes with a note. **Important** - Records your work.
  - Example: `git commit -m "fixed bug"`

- `git status`: See what files are ready or changed. **Important** - Check before committing.
  - Example: `git status`

- `git diff`: See what you changed. Useful to review before saving.
  - Example: `git diff`

### Branches (Like Different Versions)
- `git branch`: List your versions. Useful to see what you have.
  - Example: `git branch`

- `git branch <name>`: Make a new version. **Important** - For working on new features without breaking main code.
  - Example: `git branch new-feature`

- `git checkout <name>`: Switch to a version. **Important** - Change to work on different parts.
  - Example: `git checkout new-feature`
  - `git checkout -b <name>`: Make and switch to a new version.

- `git merge <name>`: Combine two versions. **Important** - Bring changes together.
  - Example: `git merge new-feature`

### Share Online
- `git remote add origin <url>`: Connect to GitHub. **Important** - Link your local project to online repo.
  - Example: `git remote add origin https://github.com/user/repo.git`

- `git push origin <branch>`: Send your changes to GitHub. **Important** - Share your work online.
  - Example: `git push origin main`

- `git pull origin <branch>`: Get latest changes from GitHub. **Important** - Update your local code.
  - Example: `git pull origin main`

- `git fetch`: Check for new changes without merging. Useful to see updates first.
  - Example: `git fetch`

### Work with Others
- Fork: Copy someone else's project to your GitHub (done on website). **Important** - Start contributing to open source.
- Pull Request: Ask to add your changes to the main project (on website). **Important** - Propose changes for review.

## GitHub CLI Commands (gh)
This is a tool to use GitHub from the command line. **Important ones are marked with **.

### Get Started
- Install: Download from https://cli.github.com/
- `gh auth login`: Sign in to GitHub. **Important** - Must do first to use the tool.
  - Example: `gh auth login`

### Manage Projects
- `gh repo create <name>`: Make a new project on GitHub. **Important** - Start a new repo.
  - Example: `gh repo create my-project`

- `gh repo clone <repo>`: Copy a project. Useful for getting repos.
  - Example: `gh repo clone user/repo`

- `gh repo fork <repo>`: Copy someone else's project. **Important** - For contributing.
  - Example: `gh repo fork user/repo`

### Issues and Pull Requests
- `gh issue list`: See problems in the project. Useful to check tasks.
  - Example: `gh issue list`

- `gh issue create`: Report a new problem. **Important** - Share bugs or ideas.
  - Example: `gh issue create --title "Bug" --body "Details"`

- `gh pr list`: See change requests. Useful to see contributions.
  - Example: `gh pr list`

- `gh pr create`: Make a change request. **Important** - Propose your code changes.
  - Example: `gh pr create --title "New feature" --body "What I did"`

- `gh pr checkout <number>`: Switch to a change request. Useful to test changes.
  - Example: `gh pr checkout 123`

### Other
- `gh gist create <file>`: Share a small code snippet. Useful for quick shares.
  - Example: `gh gist create code.py`

- `gh repo view`: See project info. Useful to get details.
  - Example: `gh repo view`

- `gh user`: See your info. Useful to check account.
  - Example: `gh user`

For more, check https://cli.github.com/manual/
