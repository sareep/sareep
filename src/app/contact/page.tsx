'use client';

import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the form data to your backend
  };

  return (
    <Card sx={{  margin: 2, padding: 2 }}>
      <CardContent>
      <Typography variant="h5" component="h1" gutterBottom>
        Send me a message.
      </Typography>
      {submitted ? (
        <Typography variant="body1">
        Thanks for sending me a message! I should get back to you shortly.
        </Typography>
      ) : (
        <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Your Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Your Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Send
        </Button>
        </Box>
      )}
      </CardContent>
    </Card>
  );
}