import { supabase } from "@/lib/supabase";

type SignupData = {
  nom: string;
  prenom: string;
  email: string;
  password: string;
};

export async function signup({ nom, prenom, email, password }: SignupData) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { nom, prenom },
    },
  });

  if (error) {
    throw error;
  }

  return data;
}
