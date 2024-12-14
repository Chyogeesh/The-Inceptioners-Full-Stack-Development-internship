const Package = require('../models/Package');

exports.getPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    res.status(200).json(packages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch packages' });
  }
};

exports.addPackage = async (req, res) => {
  try {
    const newPackage = new Package(req.body);
    await newPackage.save();
    res.status(201).json({ message: 'Package added successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add package' });
  }
};

exports.updatePackage = async (req, res) => {
  try {
    const updatedPackage = await Package.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedPackage);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update package' });
  }
};

exports.deletePackage = async (req, res) => {
  try {
    await Package.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Package deleted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete package' });
  }
};
