import { notFound } from 'next/navigation';

import DesignPreview from './DesignPreview';
import { db } from '@/db';

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const PreviewPage = async ({ searchParams }: PageProps) => {
  const { id } = searchParams;
  if (!id || typeof id !== 'string') return notFound();

  const configuration = await db.configuration.findUnique({ where: { id } });
  if (!configuration) return notFound();

  return <DesignPreview configuration={configuration} />;
};

export default PreviewPage;