module.exports = {
  types: [
    {
      value: 'feat',
      name: 'feat:     New Features'
    },
    {
      value: 'fix',
      name: 'fix:      Fix'
    },
    {
      value: 'docs',
      name: 'docs:     Document Changes'
    },
    {
      value: 'style',
      name: 'style:    Code format (changes that do not affect the operation of the code)'
    },
    {
      value: 'refactor',
      name: 'refactor: Refactoring (neither adding features nor fixing bugs)'
    },
    {
      value: 'perf',
      name: 'perf:     Performance Optimization'
    },
    {
      value: 'test',
      name: 'test:     Add tests'
    },
    {
      value: 'chore',
      name: 'chore:    Changes to the build process or supporting tools'
    },
    {
      value: 'revert',
      name: 'revert:   Backtrack'
    },
    {
      value: 'build',
      name: 'build:    Packing'
    }
  ],
  messages: {
    type: 'Please select the submission type:',
    customScope: 'Please enter the modification range (optional):',
    subject: 'Please submit a brief description (required):',
    body: 'Please enter a detailed description (optional):',
    footer: 'Please enter the issue to be closed (optional):',
    confirmCommit: 'Confirm submission using the above information? (y/n/e/h)'
  },
  skipQuestions: ['body', 'footer'],
  subjectLimit: 72
}
