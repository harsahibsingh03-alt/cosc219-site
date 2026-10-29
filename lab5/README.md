# COSC 219 — Lab 5: Arrays, Loops & Iterators

This lab analyzes ten Okanagan trails. The report shows 10 trails, including 8 open and 2 closed, with 54.6 km of open trails; Mission Creek is the longest open trail.

The main trap to watch for is that `sort()` mutates its input. `sortedByDistance` copies the array before sorting and uses a numeric comparator.

## Testing

Open `check.html` using Live Server. The expected result is **35 passed, 0 to fix**. The final test verifies that the original `TRAILS` array has not been changed.

## Links

- Repository: https://github.com/harsahibsingh03-alt/cosc219-site
- Live checker: https://harsahibsingh03-alt.github.io/cosc219-site/lab5/check.html
