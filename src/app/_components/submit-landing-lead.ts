'use server';

import { createServiceRoleClient } from '@/lib/supabase';

import { landingLeadSchema } from './landing-lead.schema';

type ActionResult<T> = { success: true; data: T } | { success: false; error: string };

export async function submitLandingLead(
  rawInput: Record<string, unknown>,
): Promise<ActionResult<{ id: string }>> {
  const parsed = landingLeadSchema.safeParse(rawInput);
  if (!parsed.success) {
    return { success: false, error: parsed.error.errors[0]?.message ?? 'Dados inválidos' };
  }

  const supabase = createServiceRoleClient();

  // Strip empty UTM fields to avoid errors if columns don't exist yet
  const { utm_source, utm_medium, utm_campaign, utm_term, utm_content, ...coreData } = parsed.data;
  const utmFields = Object.fromEntries(
    Object.entries({ utm_source, utm_medium, utm_campaign, utm_term, utm_content })
      .filter(([, v]) => v && v.length > 0),
  );
  const insertData = { ...coreData, ...utmFields };

  const { data, error } = await (supabase
    .from('landing_leads' as never) as ReturnType<typeof supabase.from>)
    .insert(insertData as never)
    .select('id')
    .single();

  if (error || !data) {
    console.error('landing_leads insert error:', error?.message);
    return { success: false, error: 'Erro ao enviar formulário. Tente novamente.' };
  }

  return { success: true, data: { id: data.id as string } };
}
