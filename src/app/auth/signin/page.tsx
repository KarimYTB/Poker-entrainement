import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function SignInPage() {
  return (
    <div className="mx-auto max-w-md space-y-6">
      <h1 className="text-3xl font-semibold text-white">Connexion</h1>
      <Card>
        <form className="space-y-4">
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-white/50">Email</label>
            <input
              type="email"
              className="mt-2 w-full rounded-xl border border-white/10 bg-surface-900 px-3 py-2 text-sm text-white"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-white/50">Mot de passe</label>
            <input
              type="password"
              className="mt-2 w-full rounded-xl border border-white/10 bg-surface-900 px-3 py-2 text-sm text-white"
            />
          </div>
          <Button type="submit" className="w-full">Se connecter</Button>
          <Link href="/auth/signup" className="block text-center text-xs text-neon-blue">
            Créer un compte
          </Link>
        </form>
      </Card>
    </div>
  );
}
