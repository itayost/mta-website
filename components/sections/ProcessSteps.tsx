import { StepsSection } from './StepsSection'

const steps = [
  {
    label: '01',
    title: 'פגישת היכרות',
    description: 'פגישה ראשונית ללא עלות להבנת הצרכים שלכם ולבניית תוכנית עבודה מותאמת.',
  },
  {
    label: '02',
    title: 'ליווי שוטף',
    description: 'טיפול מקצועי ושוטף בכל ענייני החשבונאות והמיסוי, עם זמינות מלאה.',
  },
  {
    label: '03',
    title: 'אופטימיזציה',
    description: 'בחינה מתמדת של הזדמנויות לחיסכון במס ושיפור התנהלות פיננסית.',
  },
]

export function ProcessSteps() {
  return (
    <StepsSection
      title="איך אנחנו עובדים"
      subtitle="תהליך פשוט וברור מהפגישה הראשונה ועד הליווי השוטף"
      steps={steps}
    />
  )
}
