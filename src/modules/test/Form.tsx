import { useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import Input from "@/components/myComponant/input/input";
import Drawer from "@/components/myComponant/Drawer/Drawer";

interface ICertificationForm {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  updateData?: { data: any | null; dType: string | null; idx: number | null };
}

const CertificationForm = ({
  isOpen,
  onClose,
  updateData,
  onSubmit,
}: ICertificationForm) => {
  const initValue = useRef<any>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isOpen && updateData?.data) {
      initValue.current = {
        ...updateData?.data,
      };
    } else initValue.current = {};
    reset({ ...initValue.current });
  }, [isOpen, updateData, reset]);

  return (
    <Drawer title="Form" size="sm" isOpen={isOpen} onClose={() => onClose()}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          label="নাম (ইংরেজি)"
          placeholder="নাম (ইংরেজি) লিখুন"
          registerProperty={{
            ...register("titleEn", {
              required: "নাম (ইংরেজি) লিখুন",
            }),
          }}
          // isPhone
          isRequired
          isError={!!errors?.titleEn}
          errorMessage={errors?.titleEn?.message as string}
        />

        <div className="text-end mt-4">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Drawer>
  );
};
export default CertificationForm;
