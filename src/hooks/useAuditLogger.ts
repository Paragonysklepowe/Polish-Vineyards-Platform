import { useCallback } from 'react';
import { useAuthStore } from '../store/authStore';
import type { AuditLog } from '../types/vineyard-management';

export function useAuditLogger() {
  const { user } = useAuthStore();

  const logAction = useCallback(
    async (
      action: AuditLog['action'],
      entityType: string,
      entityId: string,
      changes: Record<string, { old: any; new: any }>
    ) => {
      if (!user) throw new Error('User must be authenticated to log actions');

      const auditLog: Omit<AuditLog, 'id'> = {
        timestamp: new Date().toISOString(),
        userId: user.id,
        action,
        entityType,
        entityId,
        changes,
        ipAddress: window.location.hostname, // In production, get from server
      };

      // In a real app, send to server
      console.log('Audit log:', auditLog);
    },
    [user]
  );

  return { logAction };
}