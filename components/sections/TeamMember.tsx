import { User } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import type { TeamMember as TeamMemberType } from '@/types/team'

interface TeamMemberProps {
  member: TeamMemberType
}

export function TeamMember({ member }: TeamMemberProps) {
  return (
    <Card className="text-center">
      <div className="mx-auto mb-4 flex size-28 items-center justify-center rounded-full bg-bg-surface ring-4 ring-primary/20">
        <User className="size-14 text-primary" />
      </div>
      <h3 className="text-xl font-bold text-text-primary">{member.name}</h3>
      <p className="text-primary font-semibold mt-1">{member.role}</p>
      <p className="text-text-muted mt-3 leading-relaxed text-sm">{member.description}</p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {member.credentials.map((cred) => (
          <Badge key={cred} variant="primary">
            {cred}
          </Badge>
        ))}
      </div>
    </Card>
  )
}
