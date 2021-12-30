
CREATE OR ALTER TRIGGER [dbo].[emailTrigger] 
ON [dbo].[taskAssignment]
AFTER INSERT
AS 
BEGIN
INSERT INTO [dbo].[emails]
(email)
SELECT taskLead FROM inserted i;
END;

CREATE OR ALTER TRIGGER [dbo].[phoneTrigger] 
ON [dbo].[userDetails]
AFTER INSERT
AS 
BEGIN
INSERT INTO [dbo].[phonenumbers]
(phone)
SELECT phone FROM inserted i;

END;