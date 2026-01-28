import { ProfileCard } from '@/components/profile/ProfileCard';
import { Card } from '@/components/ui/Card';

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <h1 className="text-3xl font-semibold text-white">Profil utilisateur</h1>
      <ProfileCard />
      <Card>
        <p className="text-sm text-white/70">Objectifs: stack 100bb, travailler le 3-bet light.</p>
      </Card>
    </div>
  );
}
