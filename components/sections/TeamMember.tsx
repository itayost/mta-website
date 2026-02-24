import Image from 'next/image'
import { LogoMotif } from '@/components/ui/LogoMotif'
import type { TeamMember as TeamMemberType } from '@/types/team'

interface TeamMemberProps {
  member: TeamMemberType
}

export function TeamMember({ member }: TeamMemberProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-bg-card h-full flex flex-col">
      {/* Photo */}
      <div className="relative aspect-square sm:aspect-[4/3]">
        {member.image && (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 50vw, 50vw"
          />
        )}
      </div>

      {/* Info */}
      <div className="relative p-4 sm:p-8 flex-1">
        <LogoMotif opacity={0.15} className="absolute top-0 end-0 w-16 h-20 -translate-y-2 translate-x-2" />
        <span className="hidden sm:block text-sm font-medium text-text-muted/50">
          {member.experience ?? '\u00A0'}
        </span>
        <div className="hidden sm:block my-4 h-px bg-text-muted/10" />
        <h3 className="text-base sm:text-xl font-bold text-text-primary">{member.name}</h3>
        <p className="mt-0.5 sm:mt-1 text-sm text-text-muted">{member.role}</p>
      </div>
    </div>
  )
}
