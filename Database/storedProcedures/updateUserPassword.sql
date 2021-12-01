CREATE OR ALTER PROCEDURE [dbo].[updatepassword]
(
    @email VARCHAR(255),
    @password VARCHAR(255)
)
AS
BEGIN
    SET NOCOUNT ON;
  UPDATE [dbo].[userDetails]
  SET password = @password
  WHERE email = @email and isDeleted = 0;
END;
GO