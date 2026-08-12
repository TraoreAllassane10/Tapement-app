import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Entrer un e-mail valide"),
  password: z.string().min(6, "Mot de passe très court"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
