
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 1, make: 'BMW', model: '3 Series', mileage: 1200},
        {VIN: 2, make: 'Audi', model: 'Q8', mileage: 1600},
        {VIN: 3, make: 'Chrysler', model: 'Pacifica', mileage: 13041},
        {VIN: 4, make: 'Ford', model: 'Explorer', mileage: 21341},
        {VIN: 5, make: 'Honda', model: 'Accord', mileage: 31251},
        {VIN: 6, make: 'Honda', model: 'Civic', mileage: 23351},
        {VIN: 7, make: 'Honda', model: 'Odyssey', mileage: 12351},
        {VIN: 8, make: 'Hyundai', model: 'Sonata', mileage: 21111},
        {VIN: 9, make: 'Kia', model: 'Niro', mileage: 46212},
        {VIN: 10, make: 'Lexus', model: 'RX', mileage: 9251},
      ]);
    });
};
