export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { userAgent, time } = req.body;

  console.log("🚨 تلاش مشکوک ثبت شد:");
  console.log("🖥️ مرورگر:", userAgent);
  console.log("🕓 زمان:", time);

  // پاسخ به فرانت‌اند
  res.status(200).json({ message: "ثبت شد" });
}
