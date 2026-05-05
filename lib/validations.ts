import { z } from "zod"; // 推荐使用具名导入

export const SigninSchema = z.object({
  email: z
    .email({
      message: "请输入有效的邮箱地址",
    })
    .min(1, { message: "邮箱不能为空" }),

  password: z
    .string()
    .min(8, { message: "密码至少需要 8 个字符" })
    .max(32, { message: "密码最多 32 个字符" })
    .regex(/[A-Z]/, { message: "密码必须包含至少一个大写字母" })
    .regex(/[a-z]/, { message: "密码必须包含至少一个小写字母" })
    .regex(/[0-9]/, { message: "密码必须包含至少一个数字" })
    .regex(/[^A-Za-z0-9]/, { message: "密码必须包含至少一个特殊字符" }),
});

export const SignupSchema = z
  .object({
    userName: z
      .string()
      .min(3, { message: "用户名至少 3 个字符" })
      .max(20, { message: "用户名最多 20 个字符" })
      .regex(/^[a-zA-Z0-9_]+$/, {
        message: "用户名只能包含字母、数字和下划线",
      }),

    name: z
      .string()
      .min(2, { message: "姓名至少 2 个字符" })
      .max(50, { message: "姓名最多 50 个字符" })
      .regex(/^[\u4e00-\u9fa5a-zA-Z\s]+$/, {
        message: "姓名只能包含中文、英文和空格",
      }),

    email: z.email({ message: "请输入有效的邮箱地址" }),

    password: z
      .string()
      .min(8, { message: "密码至少需要 8 个字符" })
      .max(32, { message: "密码最多 32 个字符" })
      .regex(/[A-Z]/, { message: "密码必须包含至少一个大写字母" })
      .regex(/[a-z]/, { message: "密码必须包含至少一个小写字母" })
      .regex(/[0-9]/, { message: "密码必须包含至少一个数字" })
      .regex(/[^A-Za-z0-9]/, { message: "密码必须包含至少一个特殊字符" }),

    confirmPassword: z.string({ message: "请确认密码" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "两次输入的密码不一致",
    path: ["confirmPassword"], // 错误信息指向 confirmPassword 字段
  });
