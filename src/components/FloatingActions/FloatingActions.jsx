import './FloatingActions.css'
import blueBg from '../../assets/blue_background.svg'
import questionIcon from '../../assets/question-mark.svg'
import meetingIcon from '../../assets/meeting 1.svg'
import scheduleIcon from '../../assets/schedule.svg'

const floatingActionMock = [
  {
    id: 'question',
    icon: questionIcon,
    label: 'Need help',
  },
  {
    id: 'meeting',
    icon: meetingIcon,
    label: 'Meetings',
  },
  {
    id: 'schedule',
    icon: scheduleIcon,
    label: 'Schedule',
  },
]

function FloatingActionButton({ icon, label }) {
  return (
    <button className="floating-action" type="button" aria-label={label}>
      <img src={blueBg} alt="" aria-hidden="true" className="floating-action__bg" />
      <img src={icon} alt="" aria-hidden="true" className="floating-action__icon" />
    </button>
  )
}

export default function FloatingActions() {
  return (
    <div className="floating-actions">
      {floatingActionMock.map((action) => (
        <FloatingActionButton key={action.id} icon={action.icon} label={action.label} />
      ))}
    </div>
  )
}

