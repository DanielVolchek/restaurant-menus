const { sequelize } = require("./db");
const { Restaurant, Menu } = require("./models/index");
const { seedRestaurant, seedMenu } = require("./seedData");

describe("Restaurant and Menu Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  test("can create a Restaurant", async () => {
    // TODO - write test
    const restaurant = await Restaurant.create({
      name: "Test Name",
      location: "Test Location",
      cuisine: "Test cuisine",
    });
    expect(restaurant.name).toEqual("Test Name");
  });

  test("can create a Menu", async () => {
    const menu = await Menu.create({
      title: "Test Name",
    });
    expect(menu.title).toEqual("Test Name");
  });

  test("can find Restaurants", async () => {
    // TODO - write test
    const foundRestaurants = await Restaurant.findAll();
    console.log(foundRestaurants);
    expect(foundRestaurants.length).toEqual(1);
    expect(foundRestaurants[0].name).toEqual("Test Name");
  });

  test("can find Menus", async () => {
    // TODO - write test
    const foundMenu = await Menu.findAll();
    expect(foundMenu.length).toEqual(1);
    expect(foundMenu[0].title).toEqual("Test Name");
  });

  test("can delete Restaurants", async () => {
    const restaurant = await Restaurant.create({
      name: "Test Name",
      location: "Test Location",
      cuisine: "Test cuisine",
    });

    await restaurant.destroy();
    const foundRestaurants = await Restaurant.findAll();
    expect(foundRestaurants.length).toEqual(1);
  });
});
