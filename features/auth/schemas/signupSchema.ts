import z from "zod";

export const signupSchema = z.object({
  nom: z.string().min(1, "Entrer votre nom"),
  prenom: z.string().min(1, "Entrer votre prenom"),
  email: z.string().email("Entrer un e-mail valide"),
  password: z.string().min(6, "Mot de passe très court"),
});

export type SignupFormData = z.infer<typeof signupSchema>;
