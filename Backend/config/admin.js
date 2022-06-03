module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '10e7959443e0b5138c80f64201df8e97'),
  },
});
