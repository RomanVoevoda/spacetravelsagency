import { useState } from "react";

type fetchingResult = [() => Promise<void>, boolean, any];

export const useFetching = (callback: () => Promise<void>): fetchingResult  => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>('');

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch(error) {
      if(error instanceof Error) setError(error);     
    } finally {
      setIsLoading(false);
    }
  }

  return [fetching, isLoading, error];
}