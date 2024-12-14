const Booking = require('../models/Booking');
const Package = require('../models/Package');

exports.bookPackage = async (req, res) => {
  try {
    const { name, email, phone, travelers, specialRequests, packageId } = req.body;
    const tourPackage = await Package.findById(packageId);
    const totalPrice = tourPackage.price * travelers;

    const booking = new Booking({
      name, email, phone, travelers, specialRequests, packageId, totalPrice
    });

    await booking.save();

    res.status(201).json({ message: 'Booking successful!', booking });
  } catch (error) {
    res.status(500).json({ error: 'Failed to book package' });
  }
};
