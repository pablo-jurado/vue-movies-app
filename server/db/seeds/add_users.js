exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          firstName: "Pablo",
          lastName: "Jurado",
          email: "fake@fake.tld",
          hashedPassword: "123456",
        },
      ]);
    });
};
