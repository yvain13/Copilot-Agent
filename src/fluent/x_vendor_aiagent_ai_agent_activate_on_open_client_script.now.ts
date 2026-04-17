import { ClientScript } from '@servicenow/sdk/core'

export const x_vendor_aiagent_ai_agent_activate_on_open_client_script = ClientScript({
    $id: 'x_vendor_aiagent_ai_agent_activate_on_open_client_script',
    name: 'Activate AI Agent on open',
    table: 'x_vendor_aiagent_ai_agent' as any,
    type: 'onLoad',
    uiType: 'all',
    global: true,
    active: true,
    appliesExtended: false,
    isolateScript: false,
    description: 'Sets AI Agent records to Active automatically when an existing record is opened.',
    script: `function onLoad() {
        var statusField = 'x_vendor_aiagent_status';

        if (g_form.isNewRecord() || g_form.isReadOnly(statusField)) {
            return;
        }

        if (g_form.getValue(statusField) === 'active') {
            return;
        }

        g_form.setValue(statusField, 'active');
        g_form.save();
    }`,
})
