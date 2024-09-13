import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "password") VALUES ('00ad9f40-0a56-4776-82ac-eb1b41a4e60a', '1Janie96@gmail.com', 'Michael Jordan', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv345678', true, 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "password") VALUES ('317d8d47-dfac-4865-929d-c22cd0a65b16', '9Dandre_Daniel50@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=11', 'inv123456', true, 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "password") VALUES ('51ffb551-1e5c-4956-bac7-0d62860d69c0', '17Laurence.Bednar@gmail.com', 'Bruce Wayne', 'https://i.imgur.com/YfJQV5z.png?id=19', 'inv123456', true, 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "password") VALUES ('ca60e2e5-5fff-4bdb-974a-efe4d75b0904', '25Merritt66@hotmail.com', 'Bruce Wayne', 'https://i.imgur.com/YfJQV5z.png?id=27', 'inv123456', true, 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "password") VALUES ('153e66cc-cb7a-46f5-9220-12b9a7fcd4fb', '41Adonis54@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=43', 'inv123456', true, 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "password") VALUES ('54793149-396d-47bd-b09d-6432c929167f', '49Malachi85@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=51', 'inv567890', false, 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "password") VALUES ('be78683b-9025-49fa-a27d-e1fad544476f', '57Hermann.Botsford69@yahoo.com', 'Sarah Connor', 'https://i.imgur.com/YfJQV5z.png?id=59', 'inv789012', true, 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "password") VALUES ('ed39e267-ce2f-45eb-8ea5-eccced2c1f93', '65Fay.Haley@gmail.com', 'Michael Jordan', 'https://i.imgur.com/YfJQV5z.png?id=67', 'inv345678', true, 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "password") VALUES ('3a4db80e-dce2-4b51-ae8c-b5e55914dabe', '73Wallace.Beer@hotmail.com', 'Sarah Connor', 'https://i.imgur.com/YfJQV5z.png?id=75', 'inv901234', false, 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('8483cb89-4f1f-4e45-acf9-fb3889b13426', 'Tech Innovators Inc.', 'https://i.imgur.com/YfJQV5z.png?id=82');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('0d3391b1-7e80-4a3e-bf31-95dedebde5f3', 'Alpha Analytics', 'https://i.imgur.com/YfJQV5z.png?id=85');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('18400695-d5c5-4100-a157-0ac03d5233ee', 'Alpha Analytics', 'https://i.imgur.com/YfJQV5z.png?id=88');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('4adf7509-2862-4cda-a8a1-b49bc463b212', 'NextGen Enterprises', 'https://i.imgur.com/YfJQV5z.png?id=91');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('621e46e0-14ee-4edd-a4b8-0159e3c0990d', 'Alpha Analytics', 'https://i.imgur.com/YfJQV5z.png?id=94');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('274d1fdf-5235-4db2-9dbc-851a66918da1', 'Global Solutions LLC', 'https://i.imgur.com/YfJQV5z.png?id=97');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('e2d8314e-669e-44ed-8239-b9b3f56a985b', 'Global Solutions LLC', 'https://i.imgur.com/YfJQV5z.png?id=100');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('5b89da4a-d0b8-4fed-867f-ebf2b1526114', 'NextGen Enterprises', 'https://i.imgur.com/YfJQV5z.png?id=103');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('448cc38a-ca95-4f8d-affd-43bef643dc1e', 'Global Solutions LLC', 'https://i.imgur.com/YfJQV5z.png?id=106');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('7827dd35-cb72-48d9-8630-3cee1206c794', 'Data Wizards Co.', 'https://i.imgur.com/YfJQV5z.png?id=109');

INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('c1acf45d-e96c-4e7f-830e-f4596c49f244', 'Manager', '317d8d47-dfac-4865-929d-c22cd0a65b16', '5b89da4a-d0b8-4fed-867f-ebf2b1526114');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('8b027fb0-2b65-4e82-bbce-ceb0011ac577', 'Viewer', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '0d3391b1-7e80-4a3e-bf31-95dedebde5f3');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('3074c4e8-036c-4205-92ec-901acf20925b', 'Contributor', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '18400695-d5c5-4100-a157-0ac03d5233ee');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('7e0fa8e1-8ff9-414c-ae59-702f02c29d9e', 'Contributor', 'be78683b-9025-49fa-a27d-e1fad544476f', '0d3391b1-7e80-4a3e-bf31-95dedebde5f3');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('ff76ca94-f0f9-4c27-891e-3e4bcdb13ec5', 'Administrator', 'ed39e267-ce2f-45eb-8ea5-eccced2c1f93', '621e46e0-14ee-4edd-a4b8-0159e3c0990d');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('3ad030e5-9abe-4670-bd33-446b81f71eaf', 'Manager', '51ffb551-1e5c-4956-bac7-0d62860d69c0', '18400695-d5c5-4100-a157-0ac03d5233ee');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('a13f5933-9e59-419b-bf85-0c9271ea1fa5', 'Viewer', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '621e46e0-14ee-4edd-a4b8-0159e3c0990d');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('213825e4-fd7e-4bb4-ab73-e5ad776b470c', 'Contributor', '3a4db80e-dce2-4b51-ae8c-b5e55914dabe', '621e46e0-14ee-4edd-a4b8-0159e3c0990d');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('45d2325f-254f-497d-b4df-9241eae27aa2', 'Editor', 'be78683b-9025-49fa-a27d-e1fad544476f', '448cc38a-ca95-4f8d-affd-43bef643dc1e');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('cf55c086-0c85-4519-9a6d-d134c9d52d35', 'Viewer', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '5b89da4a-d0b8-4fed-867f-ebf2b1526114');

INSERT INTO "Dataset" ("id", "name", "description", "organizationId") VALUES ('31658aeb-5dcf-4210-a774-2b164a3dcc6c', 'Sales_Report_Q1_2023', 'Data collected from the recent marketing campaign', '18400695-d5c5-4100-a157-0ac03d5233ee');
INSERT INTO "Dataset" ("id", "name", "description", "organizationId") VALUES ('fbf27bbc-9888-4525-a5a5-ddf6daf10da8', 'Marketing_Campaign_Data', 'Detailed list of all products in inventory', '274d1fdf-5235-4db2-9dbc-851a66918da1');
INSERT INTO "Dataset" ("id", "name", "description", "organizationId") VALUES ('b0a2dff5-9878-4a00-9d8d-4d900de76501', 'Product_Inventory_List', 'Attendance records for all employees for the year 2022', '5b89da4a-d0b8-4fed-867f-ebf2b1526114');
INSERT INTO "Dataset" ("id", "name", "description", "organizationId") VALUES ('d8264e2d-a2ef-4991-9744-a591f2ec1ea5', 'Employee_Attendance_2022', 'Attendance records for all employees for the year 2022', '18400695-d5c5-4100-a157-0ac03d5233ee');
INSERT INTO "Dataset" ("id", "name", "description", "organizationId") VALUES ('e4bc29dc-201c-46ed-b8d9-6b86038a45b4', 'Sales_Report_Q1_2023', 'Results from the annual customer satisfaction survey', '0d3391b1-7e80-4a3e-bf31-95dedebde5f3');
INSERT INTO "Dataset" ("id", "name", "description", "organizationId") VALUES ('84a1ca4c-1053-46f6-9c67-3fb21abf99ea', 'Marketing_Campaign_Data', 'Quarterly sales report for the first quarter of 2023', '8483cb89-4f1f-4e45-acf9-fb3889b13426');
INSERT INTO "Dataset" ("id", "name", "description", "organizationId") VALUES ('8bc85b00-2641-48f8-a01f-538834f0d0c2', 'Sales_Report_Q1_2023', 'Detailed list of all products in inventory', '5b89da4a-d0b8-4fed-867f-ebf2b1526114');
INSERT INTO "Dataset" ("id", "name", "description", "organizationId") VALUES ('d035b0d5-cb47-4d33-aca4-b34de3e6326d', 'Customer_Survey_Results', 'Attendance records for all employees for the year 2022', '5b89da4a-d0b8-4fed-867f-ebf2b1526114');
INSERT INTO "Dataset" ("id", "name", "description", "organizationId") VALUES ('4acc1d7d-501b-48b6-820d-029e761ba4a8', 'Sales_Report_Q1_2023', 'Quarterly sales report for the first quarter of 2023', '7827dd35-cb72-48d9-8630-3cee1206c794');
INSERT INTO "Dataset" ("id", "name", "description", "organizationId") VALUES ('db1bcbd0-3ecb-4213-86e3-d76348bd1cd5', 'Product_Inventory_List', 'Attendance records for all employees for the year 2022', '4adf7509-2862-4cda-a8a1-b49bc463b212');

INSERT INTO "Endpoint" ("id", "name", "url", "method", "datasetId") VALUES ('5e179f6a-d58c-4cdb-af20-d2986ba2c3c4', 'Sales Report Endpoint', 'https://i.imgur.com/YfJQV5z.png?id=162', 'POST', '4acc1d7d-501b-48b6-820d-029e761ba4a8');
INSERT INTO "Endpoint" ("id", "name", "url", "method", "datasetId") VALUES ('c04cb261-09b0-44bd-a03f-707c93c23100', 'Inventory Check', 'https://i.imgur.com/YfJQV5z.png?id=166', 'PATCH', '4acc1d7d-501b-48b6-820d-029e761ba4a8');
INSERT INTO "Endpoint" ("id", "name", "url", "method", "datasetId") VALUES ('b254dee2-3883-4e07-aa30-59b449633217', 'Inventory Check', 'https://i.imgur.com/YfJQV5z.png?id=170', 'DELETE', '84a1ca4c-1053-46f6-9c67-3fb21abf99ea');
INSERT INTO "Endpoint" ("id", "name", "url", "method", "datasetId") VALUES ('8091076d-2127-482d-97de-99f56a24b9b1', 'Sales Report Endpoint', 'https://i.imgur.com/YfJQV5z.png?id=174', 'POST', 'd035b0d5-cb47-4d33-aca4-b34de3e6326d');
INSERT INTO "Endpoint" ("id", "name", "url", "method", "datasetId") VALUES ('1daf0ba4-853e-4db8-9742-4eddf638c796', 'User Data API', 'https://i.imgur.com/YfJQV5z.png?id=178', 'PUT', 'e4bc29dc-201c-46ed-b8d9-6b86038a45b4');
INSERT INTO "Endpoint" ("id", "name", "url", "method", "datasetId") VALUES ('832f263c-d8cb-4cd7-be0a-cbff280dd4ae', 'Customer Feedback', 'https://i.imgur.com/YfJQV5z.png?id=182', 'DELETE', 'fbf27bbc-9888-4525-a5a5-ddf6daf10da8');
INSERT INTO "Endpoint" ("id", "name", "url", "method", "datasetId") VALUES ('4633d08b-7e72-4d15-8338-e46c1c509bb1', 'Order Processing', 'https://i.imgur.com/YfJQV5z.png?id=186', 'GET', '8bc85b00-2641-48f8-a01f-538834f0d0c2');
INSERT INTO "Endpoint" ("id", "name", "url", "method", "datasetId") VALUES ('5b21f1da-643d-4e65-8747-aeb231b4fdf7', 'User Data API', 'https://i.imgur.com/YfJQV5z.png?id=190', 'POST', 'e4bc29dc-201c-46ed-b8d9-6b86038a45b4');
INSERT INTO "Endpoint" ("id", "name", "url", "method", "datasetId") VALUES ('0b245308-d66f-487f-9c2c-3f3f3679e1bb', 'Order Processing', 'https://i.imgur.com/YfJQV5z.png?id=194', 'POST', '31658aeb-5dcf-4210-a774-2b164a3dcc6c');
INSERT INTO "Endpoint" ("id", "name", "url", "method", "datasetId") VALUES ('d8df954e-9d4d-46c3-a56a-949aacbf5108', 'User Data API', 'https://i.imgur.com/YfJQV5z.png?id=198', 'POST', 'd8264e2d-a2ef-4991-9744-a591f2ec1ea5');

INSERT INTO "Subscription" ("id", "startDate", "endDate", "status", "organizationId") VALUES ('16cf1418-ccb0-4eab-b79a-07e9f9c2450b', '2023-09-17T23:23:56.982Z', '2025-04-01T18:17:56.955Z', 'expired', '448cc38a-ca95-4f8d-affd-43bef643dc1e');
INSERT INTO "Subscription" ("id", "startDate", "endDate", "status", "organizationId") VALUES ('3b7dae20-0de0-4307-9241-26b8903b62f3', '2024-10-30T12:08:08.602Z', '2023-09-27T14:27:56.605Z', 'expired', '448cc38a-ca95-4f8d-affd-43bef643dc1e');
INSERT INTO "Subscription" ("id", "startDate", "endDate", "status", "organizationId") VALUES ('e318d73e-5fe7-485c-80e1-ab3b81bfd677', '2025-06-24T00:14:53.007Z', '2025-07-06T18:36:58.737Z', 'canceled', '8483cb89-4f1f-4e45-acf9-fb3889b13426');
INSERT INTO "Subscription" ("id", "startDate", "endDate", "status", "organizationId") VALUES ('b4aba83a-fbb6-4e25-bc55-436b7634ba86', '2025-07-13T01:25:19.494Z', '2024-11-15T19:26:52.258Z', 'pending', '4adf7509-2862-4cda-a8a1-b49bc463b212');
INSERT INTO "Subscription" ("id", "startDate", "endDate", "status", "organizationId") VALUES ('bd6f7d19-5f5b-4f48-80fe-62d363be5c21', '2024-04-24T16:40:01.619Z', '2024-11-10T06:13:55.801Z', 'canceled', '0d3391b1-7e80-4a3e-bf31-95dedebde5f3');
INSERT INTO "Subscription" ("id", "startDate", "endDate", "status", "organizationId") VALUES ('44ae5279-5e6c-49bc-94cb-3a3dabaf5a03', '2024-11-09T22:56:37.311Z', '2025-08-15T16:21:43.801Z', 'canceled', '0d3391b1-7e80-4a3e-bf31-95dedebde5f3');
INSERT INTO "Subscription" ("id", "startDate", "endDate", "status", "organizationId") VALUES ('97a96e04-5a58-4c4e-96f0-f26e35787956', '2023-10-16T03:08:50.975Z', '2023-11-06T20:58:19.393Z', 'inactive', '18400695-d5c5-4100-a157-0ac03d5233ee');
INSERT INTO "Subscription" ("id", "startDate", "endDate", "status", "organizationId") VALUES ('8b969493-5a20-4223-a0f0-5518eb9225a9', '2025-08-05T21:02:04.702Z', '2025-02-17T14:16:51.041Z', 'active', '7827dd35-cb72-48d9-8630-3cee1206c794');
INSERT INTO "Subscription" ("id", "startDate", "endDate", "status", "organizationId") VALUES ('7358eee8-0cc9-4dfa-b94c-f68f0361dcc1', '2025-07-07T09:16:04.747Z', '2024-09-01T01:29:28.212Z', 'inactive', '18400695-d5c5-4100-a157-0ac03d5233ee');
INSERT INTO "Subscription" ("id", "startDate", "endDate", "status", "organizationId") VALUES ('01048612-c3bb-4173-a11c-b4380c0bcbc1', '2025-04-07T22:34:17.256Z', '2024-01-30T01:25:36.385Z', 'pending', '4adf7509-2862-4cda-a8a1-b49bc463b212');

INSERT INTO "Payment" ("id", "amount", "currency", "status", "paymentDate", "subscriptionId") VALUES ('94643a42-bc4d-4245-b164-1550c0f13d74', '99.99', 'EUR', 'pending', '2025-05-11T09:05:52.542Z', '16cf1418-ccb0-4eab-b79a-07e9f9c2450b');
INSERT INTO "Payment" ("id", "amount", "currency", "status", "paymentDate", "subscriptionId") VALUES ('73b568f1-c851-4a87-a129-f1f4b8857115', '19.99', 'USD', 'failed', '2024-01-07T06:10:06.228Z', 'b4aba83a-fbb6-4e25-bc55-436b7634ba86');
INSERT INTO "Payment" ("id", "amount", "currency", "status", "paymentDate", "subscriptionId") VALUES ('c1655612-ae76-4367-8f53-e2e4c2386fc4', '49.99', 'GBP', 'in_progress', '2023-11-22T20:17:27.534Z', '7358eee8-0cc9-4dfa-b94c-f68f0361dcc1');
INSERT INTO "Payment" ("id", "amount", "currency", "status", "paymentDate", "subscriptionId") VALUES ('6c7fa627-1e25-49a4-a88e-83087652cf4c', '99.99', 'USD', 'in_progress', '2025-06-01T00:49:30.103Z', '16cf1418-ccb0-4eab-b79a-07e9f9c2450b');
INSERT INTO "Payment" ("id", "amount", "currency", "status", "paymentDate", "subscriptionId") VALUES ('b51d1d9d-ae04-44d7-a656-f570e7420505', '19.99', 'GBP', 'failed', '2025-01-18T03:11:54.611Z', 'e318d73e-5fe7-485c-80e1-ab3b81bfd677');
INSERT INTO "Payment" ("id", "amount", "currency", "status", "paymentDate", "subscriptionId") VALUES ('792b8de1-c8ac-490d-b911-342ef1115322', '99.99', 'CAD', 'failed', '2024-05-28T10:05:39.650Z', '3b7dae20-0de0-4307-9241-26b8903b62f3');
INSERT INTO "Payment" ("id", "amount", "currency", "status", "paymentDate", "subscriptionId") VALUES ('7e73f7b0-564b-405f-8d05-e213cf9bd658', '5.00', 'GBP', 'completed', '2024-02-03T21:49:23.071Z', '44ae5279-5e6c-49bc-94cb-3a3dabaf5a03');
INSERT INTO "Payment" ("id", "amount", "currency", "status", "paymentDate", "subscriptionId") VALUES ('973859b8-5d37-4179-8f48-59f6a0eb63a0', '5.00', 'GBP', 'refunded', '2024-01-04T21:25:07.445Z', 'e318d73e-5fe7-485c-80e1-ab3b81bfd677');
INSERT INTO "Payment" ("id", "amount", "currency", "status", "paymentDate", "subscriptionId") VALUES ('cdc69bae-6175-4e06-9d78-7433dbe04182', '49.99', 'EUR', 'completed', '2024-01-08T08:12:41.274Z', 'b4aba83a-fbb6-4e25-bc55-436b7634ba86');
INSERT INTO "Payment" ("id", "amount", "currency", "status", "paymentDate", "subscriptionId") VALUES ('90f1f818-63d5-460e-ba93-7a4da11c2b76', '5.00', 'EUR', 'in_progress', '2024-09-01T00:54:46.676Z', 'bd6f7d19-5f5b-4f48-80fe-62d363be5c21');

INSERT INTO "ApiKey" ("id", "key", "isActive", "expirationDate", "organizationId") VALUES ('18ab2ced-12ed-42aa-afe3-5a831cbc23f3', 'w1x2y3z4a5b6c7d8e9f', true, '2023-11-02T03:48:11.498Z', 'e2d8314e-669e-44ed-8239-b9b3f56a985b');
INSERT INTO "ApiKey" ("id", "key", "isActive", "expirationDate", "organizationId") VALUES ('4236017e-9c50-421d-94cb-da242532f860', 'k9l8m7n6o5p4q3r2s1t', true, '2023-10-09T10:46:31.588Z', 'e2d8314e-669e-44ed-8239-b9b3f56a985b');
INSERT INTO "ApiKey" ("id", "key", "isActive", "expirationDate", "organizationId") VALUES ('75097e7f-203d-4170-83da-641dee0e7029', 'a1b2c3d4e5f6g7h8i9j0', true, '2024-06-16T07:41:31.687Z', 'e2d8314e-669e-44ed-8239-b9b3f56a985b');
INSERT INTO "ApiKey" ("id", "key", "isActive", "expirationDate", "organizationId") VALUES ('f24af646-e1e6-4511-b372-41bdc73c68a3', 'z9y8x7w6v5u4t3s2r1q', true, '2024-05-29T18:14:06.123Z', '18400695-d5c5-4100-a157-0ac03d5233ee');
INSERT INTO "ApiKey" ("id", "key", "isActive", "expirationDate", "organizationId") VALUES ('0f2dba6a-1e9e-41c1-9732-2346c8724f13', 'a1b2c3d4e5f6g7h8i9j0', false, '2023-11-06T12:29:11.374Z', '18400695-d5c5-4100-a157-0ac03d5233ee');
INSERT INTO "ApiKey" ("id", "key", "isActive", "expirationDate", "organizationId") VALUES ('bee198eb-a71a-47a3-8ea7-cb984c477da3', 'a1b2c3d4e5f6g7h8i9j0', false, '2025-08-03T23:25:45.481Z', '8483cb89-4f1f-4e45-acf9-fb3889b13426');
INSERT INTO "ApiKey" ("id", "key", "isActive", "expirationDate", "organizationId") VALUES ('90d92b20-5e83-4f21-b12b-d8563df436f2', 'w1x2y3z4a5b6c7d8e9f', false, '2024-10-27T03:30:03.703Z', '0d3391b1-7e80-4a3e-bf31-95dedebde5f3');
INSERT INTO "ApiKey" ("id", "key", "isActive", "expirationDate", "organizationId") VALUES ('d3448949-1dd9-4c03-9a70-680a46d9ae68', 'k9l8m7n6o5p4q3r2s1t', false, '2024-11-15T23:13:58.280Z', '274d1fdf-5235-4db2-9dbc-851a66918da1');
INSERT INTO "ApiKey" ("id", "key", "isActive", "expirationDate", "organizationId") VALUES ('5695c5f1-b8d0-454e-84c1-fadab6b41103', 'a1b2c3d4e5f6g7h8i9j0', true, '2024-04-04T14:41:40.216Z', '621e46e0-14ee-4edd-a4b8-0159e3c0990d');
INSERT INTO "ApiKey" ("id", "key", "isActive", "expirationDate", "organizationId") VALUES ('66d67257-4f4f-4bc8-a87c-f273eace17a2', 'm1n2o3p4q5r6s7t8u9v', true, '2025-05-03T03:05:25.199Z', '448cc38a-ca95-4f8d-affd-43bef643dc1e');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
