module.exports = {
  purge: {
    enabled: true,
    content: ['./layouts/*.html', './layouts/**/*.html','./content/**/*.md', '/content/**/**/*.md'],
  },
  theme: {
    fontFamily: {
      spoqa: ["Spoqa Han Sans", 'sans-serif']
    },
    extend: {},
  },
  variants: {},
  plugins: []
}
