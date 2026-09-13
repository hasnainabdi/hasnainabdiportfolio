# 📧 Gmail Setup Guide — Contact Form Email Integration

Your portfolio's contact form is now connected to Gmail using Nodemailer.
When someone fills the form, you'll receive an email at **m.hasnainreactions@gmail.com**
and they'll get an auto-confirmation reply.

## ⚠️ Important: You need to add your Gmail App Password

The form currently works (shows success) but **emails won't actually be sent** until
you complete Step 2 below. Until then, submissions are logged in the dev console.

---

## Step 1: Enable 2-Step Verification (required)

1. Go to **https://myaccount.google.com/security**
2. Sign in with **m.hasnainreactions@gmail.com**
3. Under "Signing in to Google", find **2-Step Verification**
4. Click it and turn it **ON** (follow the prompts)

> Gmail App Passwords only work when 2-Step Verification is enabled.

---

## Step 2: Generate a Gmail App Password

1. Go to **https://myaccount.google.com/apppasswords**
   (You may need to be signed in to your Google account)
2. In the "App name" field, type: **Portfolio Website**
3. Click **Create**
4. Google will show you a **16-character password** (looks like `abcd efgh ijkl mnop`)

---

## Step 3: Add the password to your .env file

Open this file: `/home/z/my-project/.env`

Find this line:
```
GMAIL_APP_PASSWORD=your-16-digit-app-password-here
```

Replace it with your App Password **without spaces**. Example:
```
GMAIL_APP_PASSWORD=abcdefghijklmnop
```

The full .env should look like:
```
DATABASE_URL=file:/home/z/my-project/db/custom.db

GMAIL_USER=m.hasnainreactions@gmail.com
GMAIL_APP_PASSWORD=abcdefghijklmnop

CONTACT_TO_EMAIL=m.hasnainreactions@gmail.com
CONTACT_FROM_NAME=Portfolio Website
```

Save the file. The dev server will auto-reload.

---

## Step 4: Test it

1. Open your portfolio preview link
2. Scroll to the Contact section
3. Fill in the form with a real test email (use a different email you own)
4. Click "Send Message"
5. Check **m.hasnainreactions@gmail.com** inbox — you should receive:
   - An email with the person's name, email, and message
   - A styled HTML email with a "Reply" button
6. Check the test email inbox — they should receive an auto-confirmation

---

## How it works

```
Visitor fills form
       ↓
Contact API (/api/contact)
       ↓
Nodemailer sends via Gmail SMTP
       ↓
   ┌───┴───┐
   ↓       ↓
 You     Visitor
(inbox)  (auto-reply)
```

### What you receive (in your Gmail):
- **Subject**: 📩 New Portfolio Contact: [Their Name]
- **Styled HTML email** with their name, email, message, and timestamp
- **Reply-To** is set to their email — just hit "Reply" in Gmail to respond
- **One-click reply button** in the email

### What the visitor receives (auto-reply):
- **Subject**: ✅ Thanks for reaching out! — Muhammad Hasnain
- Confirmation that you received their message
- Their message quoted back to them
- Your contact info signature

---

## Security Notes

- ✅ Your Gmail password is **never** stored — only the App Password
- ✅ App Passwords are **revocable** anytime from Google Account settings
- ✅ The App Password only works for sending email, not for account login
- ✅ Email content is HTML-escaped to prevent injection attacks
- ✅ Input length is validated to prevent abuse

---

## Troubleshooting

**"Email not sent" error:**
- Double-check the App Password has no spaces
- Make sure 2-Step Verification is ON
- Check the dev log at `/home/z/my-project/dev.log` for error details

**Emails going to spam:**
- This is normal for first-time sends. Mark them as "Not spam" in Gmail.
- Using your own Gmail as both sender and recipient can trigger this.

**Still not working?**
- Check `/home/z/my-project/dev.log` for detailed error messages
- The contact form will still show success to users even if email fails (to not lose the message — it's logged)
