
CREATE OR ALTER TRIGGER [dbo].[emailTrigger] 
ON [dbo].[userDetails]
AFTER INSERT
AS 
BEGIN
INSERT INTO [dbo].[emails]
(email)
SELECT email FROM inserted i;
END;