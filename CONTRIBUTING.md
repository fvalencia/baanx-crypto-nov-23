# How to Contribute

This is a template commonly used across different projects and the intention is to have a very robust structure that is going to be easily maintainable in the future that's why we want to make sure every code committed to this repo is up to the standards and quality we expect.

## Branch Organization

`develop` is the main branch of this repository in which we are going to test the new components and the current state of the application, then after tested we can integrate to `master`, only the code owners can integrate changes from develop to master.

## Feature Branch

When working on a new component you should follow the branch name structure, `feature/component-type/component-name` example `feature/atom/button`

## Bugs

When working on a bug or issue in the application follow the name convention, `bugfix/short-description`

## Commit

For the commit messages we are using [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/#examples) example:

`feat: implementing atom button component`

`fix: correct minor typos in code`

## Merge Request

When creating a merge request please tag the following people in as the reviewers:

- `Leonardo Costa`
- `Brendan Solovic`
- `Felipe Valencia`

After you get approval from one of the reviewers you should be good to go and merge your changes, remember to squash your commits and leave the conventional commit message on top.
