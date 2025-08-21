import { ModeToggle } from '@/components/mode-toggle'

export default function Home() {
  return (
    <div className='p-4 space-y-2 flex items-center justify-between'>
      <h2>LoansCo</h2>
      <ModeToggle />
    </div>
  )
}
