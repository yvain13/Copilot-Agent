import {
    ChoiceColumn,
    DateTimeColumn,
    ReferenceColumn,
    StringColumn,
    Table,
    UrlColumn,
} from '@servicenow/sdk/core'

export const x_vendor_aiagent_ai_agent = Table({
    name: 'x_vendor_aiagent_ai_agent' as any,
    label: 'AI Agent',
    display: 'x_vendor_aiagent_name',
    schema: {
        x_vendor_aiagent_name: StringColumn({
            label: 'Name',
            mandatory: true,
            maxLength: 200,
        }),
        x_vendor_aiagent_description: StringColumn({
            label: 'Description',
            maxLength: 1000,
        }),
        x_vendor_aiagent_status: ChoiceColumn({
            label: 'Status',
            choices: {
                active: { label: 'Active' },
                inactive: { label: 'Inactive' },
                development: { label: 'In Development' },
            },
        }),
        x_vendor_aiagent_agent_type: ChoiceColumn({
            label: 'Agent Type',
            choices: {
                autonomous: { label: 'Autonomous' },
                assisted: { label: 'Assisted' },
                hybrid: { label: 'Hybrid' },
            },
        }),
        x_vendor_aiagent_owner: ReferenceColumn({
            label: 'Owner',
            referenceTable: 'sys_user',
        }),
        x_vendor_aiagent_connected_ci: ReferenceColumn({
            label: 'Connected CI',
            referenceTable: 'cmdb_ci',
        }),
        x_vendor_aiagent_version: StringColumn({
            label: 'Version',
            maxLength: 50,
        }),
        x_vendor_aiagent_last_active: DateTimeColumn({
            label: 'Last Active',
        }),
        x_vendor_aiagent_documentation_url: UrlColumn({
            label: 'Documentation URL',
        }),
    },
})
