import Image from 'next/image'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import type { TeamMember as TeamMemberType } from '@/types/team'

interface TeamMemberProps {
  member: TeamMemberType
}

function getInitials(name: string): string {
  const parts = name.split(' ').filter(Boolean)
  if (parts.length >= 2) {
    return `${parts[0][0]}.${parts[1][0]}`
  }
  return parts[0]?.[0] ?? ''
}

export function TeamMember({ member }: TeamMemberProps) {
  const initials = getInitials(member.name)

  return (
    <Card className="text-center">
      <div className="mx-auto mb-4 relative flex size-28 items-center justify-center rounded-full bg-bg-surface ring-4 ring-primary/20 overflow-hidden">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top"
            sizes="112px"
          />
        ) : (
          <span className="text-4xl font-black text-primary select-none">{initials}</span>
        )}
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
      {member.specializations.length > 0 && (
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {member.specializations.map((spec) => (
            <Badge key={spec} variant="accent">
              {spec}
            </Badge>
          ))}
        </div>
      )}
    </Card>
  )
}
