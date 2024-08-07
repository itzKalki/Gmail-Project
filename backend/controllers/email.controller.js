import { Email } from "../models/emails.model.js";
export const createEmail = async (req, res) => {
  try {
    const userId = req.id; // Ensure req.id is being set properly
    const { to, subject, message } = req.body;

    if (!to || !subject || !message) {
      return res.status(400).json({
        message: "All fields are required",
        success: "false",
      });
    }

    const email = await Email.create({
      to,
      subject,
      message,
      userId,
    });

    return res.status(201).json({
      email,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "An error occurred while creating the email",
    });
  }
};
export const deleteEmail = async (req, res) => {
  try {
    const emailId = req.params.id;

    if (!emailId) {
      return res.status(400).json({
        message: "Email id is required",
      });
    }

    const email = await Email.findByIdAndDelete(emailId); // Use emailId here

    if (!email) {
      return res.status(404).json({
        message: "Email not found",
      });
    }

    return res.status(200).json({
      message: "Email Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "An error occurred while deleting the email",
    });
  }
};
export const getAllEmailsById = async (req, res) => {
  try {
    const userId = req._id;
    console.log(userId);
    const emails = await Email.find({userId});
    return res.status(200).json({ emails });
  } catch (error) {
    console.log(error);
  }
};
