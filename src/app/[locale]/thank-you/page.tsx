import { type Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { SimpleLayout } from '@/components/SimpleLayout'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('thankYou')

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function ThankYou() {
  const t = await getTranslations('thankYou')

  return <SimpleLayout title={t('title')} intro={t('intro')} />
}

