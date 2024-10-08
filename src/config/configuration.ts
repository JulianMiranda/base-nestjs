export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    url:
      process.env.DATABASE_URL ||
      'mysql://user:password@localhost:3306/defaultdb',
  },
  jwtSecret: process.env.JWT_SECRET || 'defaultSecret',
});
