CREATE OR ALTER PROCEDURE [dbo].[getuserbyphone]
	@phone VARCHAR(255)
AS
--reduce traffic
SET NOCOUNT ON;
BEGIN
	SELECT * 
        FROM [dbo].[userDetails]
            WHERE phone = @phone AND isDeleted = 0
END;


CREATE OR ALTER PROCEDURE [dbo].[getuser]
	@email VARCHAR(255)
AS
--reduce traffic
SET NOCOUNT ON;
BEGIN
	SELECT *
        FROM [dbo].[userDetails]
            WHERE email = @email AND isDeleted = 0
END;