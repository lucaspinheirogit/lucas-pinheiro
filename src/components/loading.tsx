import { LoaderCircle } from 'lucide-react'
import { cn } from '@/utils/cn'

interface LoadingProps {
  className?: string
}

export function Loading({ className }: LoadingProps) {
  return <LoaderCircle className={cn('animate-spin', className)} />
}
