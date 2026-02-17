import Image from 'next/image'
import type { TeamMember as TeamMemberType } from '@/types/team'

interface TeamMemberProps {
  member: TeamMemberType
  index: number
}

export function TeamMember({ member }: TeamMemberProps) {
  return (
    <div className="rounded-2xl bg-bg-card overflow-hidden flex flex-col h-full">
      {/* Photo with accent background */}
      <div className="relative aspect-[4/5] bg-accent/20">
        {member.image && (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        )}
      </div>

      {/* Info */}
      <div className="p-6">
        {member.experience && (
          <span className="text-xs font-medium text-accent">
            {member.experience}
          </span>
        )}
        <h3 className="text-lg font-bold text-text-primary mt-1">{member.name}</h3>
        <p className="text-sm text-text-muted">{member.role}</p>
      </div>
    </div>
  )
}
