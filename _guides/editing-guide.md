---
title: Editing This Guide
permalink: /guides/editing-guide.html
---

# Editing This Guide

This page explains how to edit the Staff Guide using GitHub's web interface. No technical knowledge required!

## Quick Steps

1. Go to the [staff-guide repository](https://github.com/scions-of-silverymoon/staff-guide) or the [user-guide repository](https://github.com/scions-of-silverymoon/user-guide) on GitHub
2. Navigate to the file you want to edit - individual pages are in the `_guides` folder
3. Click the pencil icon (✏️) to edit
4. Make your changes and preview them
5. Commit your changes with a descriptive message
6. Wait 1-2 minutes for changes to go live

## Finding the File to Edit

1. Go to [github.com/scions-of-silverymoon/staff-guide](https://github.com/scions-of-silverymoon/staff-guide) or [github.com/scions-of-silverymoon/user-guide](https://github.com/scions-of-silverymoon/user-guide)
2. Click on the `_guides` folder
![Github File View]({{ '/assets/images/editing/editing-guides.png' | relative_url }})
3. Find the file you want to edit:
   - `dm-info.md` for the DM Guide
   - `staff-roles.md` for Staff Roles
   - `helpers.md` for the Helpers guide
   - etc.
4. Click on the filename to view it

## Editing the File

1. **Click the pencil icon** (✏️) in the top-right corner of the file view
   - This opens the GitHub web editor
![Github Edit Icon]({{ '/assets/images/editing/editing-button.png' | relative_url }})

2. **Make your changes** in the editor
   - Edit the text as needed
   - The editor uses Markdown format (plain text with simple formatting)

3. **Preview your changes**
   - Click the "Preview" tab to see how it will look
   - Switch back to "Edit" to make more changes
   - Make sure you didn't accidentally delete any important formatting

## Committing Your Changes

After editing, hit 'Commit Changes'
![Github Commit Section]({{ '/assets/images/editing/editing-commit.png' | relative_url }})

1. **Add a commit message** (required)
   - Write a brief description (e.g., "Update DM rewards information")
   - This helps others understand what changed

2. **Add extended description** (optional)
   - Add more details if needed
   - Explain why you made the change

3. **Select "Commit directly to the `main` branch"**

4. **Click "Commit changes"**

![Github Commit Message]({{ '/assets/images/editing/editing-commit-message.png' | relative_url }})


## After Committing

- Changes go live within 1-2 minutes (GitHub Pages rebuilds automatically)
- Check the live site to confirm your changes appear correctly
- If something looks wrong, you can edit the file again to fix it

## Tips and Best Practices

### Good Commit Messages

Good commit messages help everyone track changes:

- ✅ "Update DM application requirements"
- ✅ "Fix broken link in Events guide"
- ✅ "Add information about new reward system"
- ❌ "changes"
- ❌ "update"
- ❌ "fix stuff"

### Common Edits

**Adding a new section:**
```markdown
## New Section Title

Your content here.
```

**Adding a link to another guide:**
```markdown
See the [DM Guide]({{ site.baseurl }}/dm-info/) for more details.
```

**Adding a link to a section within the same page:**
```markdown
See the [Quick Steps](#quick-steps) section above.
```

**Adding an external link:**
```markdown
Check out [this resource](https://example.com).
```

**Adding an image:**
```markdown
![Description of image](/assets/images/filename.png)
```

**Adding an image from an external URL:**
```markdown
![Description of image](https://example.com/image.png)
```

## Troubleshooting

### "My changes aren't showing up"
- Wait 2-3 minutes for GitHub Pages to rebuild
- Clear your browser cache if the old version persists
- Check the [Actions tab](https://github.com/scions-of-silverymoon/staff-guide/actions) to see if the build is still running

### "I made a mistake!"
- Just edit the file again to fix it
- GitHub keeps a complete history, so nothing is ever truly lost
- Click "History" on any file to see previous versions

### "The preview looks wrong"
- Some Markdown features may not preview exactly as they'll appear on the site
- When in doubt, commit and check the live site (it's easy to fix!)

## Getting Help

If you run into issues or have questions:

1. **Look at the edit history** - Click "History" on any file to see how others have made similar changes
2. **Check existing pages** - See how formatting is done in other guides
3. **Ping lxgrf** - This whole thing is his fault so blame him

## Advanced Use
This IS a github repo, so if you have a preferred IDE or git workflow, feel free to clone the repo and make changes locally. But if that's your preference, you probably don't need this guide.

---

**Remember:** It's okay to make mistakes - everything can be fixed! The guide is here to help staff and players, so don't hesitate to make improvements.
