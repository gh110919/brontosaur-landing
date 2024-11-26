import nodemailer from "nodemailer";

export default async function mailHandler(
  req: { method: string; body: { fio: any } },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: {
        (arg0: { success: boolean; message: string }): void;
        new (): any;
      };
    };
  }
) {
  if (req.method === "POST") {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO,
        subject: `Данные отправленые от: ${req.body.fio}`,
        text: JSON.stringify(req.body),
      });

      res.status(200).json({
        success: true,
        message: "Данные отправлены успешно !",
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: "Произошла ошибка отправки данных !",
      });
    }
  } else {
    res.status(405).json({
      success: false,
      message: "Данный метод не предусмотрен !",
    });
  }
}
