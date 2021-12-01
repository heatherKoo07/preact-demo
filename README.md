# preact demo

useEffect() in DelayedContents falls into the infinite loop because Counter keeps re-rendering somehow.

When you put the useEffect() in Counter.js directly and
remove the `<DelayedContents>`, it doesn't fall into the loop.
Why does this happen?

One interesting thing is when you set msg as string not the array,
it doesn't loop with the `<DelayedContents>`