import * as Fathom from 'fathom-client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function useAnalytics() {
  const router = useRouter();

  useEffect(() => {
    Fathom.load(process.env.FATHOM_URL);
    Fathom.setSiteId(process.env.FATHOM_SITE_ID);
  }, []);

  useEffect(() => {
    Fathom.trackPageview();
  }, [ router.route ]);
}

export default useAnalytics;