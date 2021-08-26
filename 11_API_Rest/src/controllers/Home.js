class Home {
  index(req, res) {
    res.json({
      test: true,
    });
  }
}

export default new Home();
