import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'
import { Roles } from '../types&enums/enums'
import { NavBar } from '../components/NavBar'
import { FooterSection } from '../layouts/FooterSection'
import background from "../assets/singupbg.jpg"

const roleOptions = Object.entries(Roles).map(([label, value]) => ({
  label,
  value,
}))

type FormInputs = {
  name: string
  email: string
  password: string
  confirmPassword: string
  role_id: number
  store?: {
    name: string
    phone: string
    tax_no: string
    bank_account: string
  }
}

type Payload = Omit<FormInputs, 'confirmPassword'>

export const SingUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      role_id: Roles.Customer,
    },
  })

  const selectedRole = watch('role_id')
  const passwordValue = watch('password')

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...rest } = data
    const payload: Payload = rest
    console.log(payload)
  }

  return (
    <div className="flex flex-col font-montserrat items-center">
      <NavBar />
      <form
        className="form-wrapper"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0)), url(${background})`
        }}
      >
        {/* Ad */}
        <div className="flex flex-col">
          <label htmlFor="name" className="form-row">
            <span className="label-span">Adınızı Giriniz:</span>
            <input id="name" className="input-style" {...register('name', {
              required: 'İsim zorunludur',
              minLength: {
                value: 3,
                message: 'İsim en az 3 karakter olmalıdır',
              },
            })} />
          </label>
          {errors.name && <p className="error-text xl:pl-[200px]">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="form-row">
            <span className="label-span">E-mail Adresinizi Giriniz:</span>
            <input id="email" type="email" className="input-style" {...register('email', {
              required: 'Email zorunludur',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Geçerli bir email adresi giriniz',
              },
            })} />
          </label>
          {errors.email && <p className="error-text xl:pl-[200px]">{errors.email.message}</p>}
        </div>

        {/* Şifre */}
        <div className="flex flex-col">
          <label htmlFor="password" className="form-row">
            <span className="label-span">Şifre:</span>
            <input id="password" type="password" className="input-style" {...register('password', {
              required: 'Şifre zorunludur',
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                message: 'Şifre en az 8 karakter, büyük/küçük harf, sayı ve özel karakter içermelidir',
              },
            })} />
          </label>
          {errors.password && <p className="error-text xl:pl-[200px]">{errors.password.message}</p>}
        </div>

        {/* Şifre Tekrar */}
        <div className="flex flex-col">
          <label htmlFor="confirmPassword" className="form-row">
            <span className="label-span">Şifre Tekrar:</span>
            <input id="confirmPassword" type="password" className="input-style" {...register('confirmPassword', {
              required: 'Şifre tekrar zorunludur',
              validate: (value) => value === passwordValue || 'Şifreler eşleşmiyor',
            })} />
          </label>
          {errors.confirmPassword && <p className="error-text xl:pl-[200px]">{errors.confirmPassword.message}</p>}
        </div>

        {/* Rol Seçimi */}
        <div className="flex flex-col">
          <label htmlFor="role_id" className="form-row">
            <span className="label-span">Rol Seçiniz:</span>
            <select id="role_id" className="input-style" {...register('role_id', {
              valueAsNumber: true,
              required: true
            })}>
              {roleOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="text-black">{opt.label}</option>
              ))}
            </select>
          </label>
          {errors.role_id && <p className="error-text xl:pl-[200px]">Rol seçimi zorunludur</p>}
        </div>

        {/* Store Alanları */}
        {selectedRole === Roles.Store && (
          <>
            <div className="flex flex-col">
              <label className="form-row">
                <span className="label-span">Mağaza Adı:</span>
                <input className="input-style" placeholder="Mağaza Adı" {...register('store.name', {
                  required: 'Mağaza adı zorunludur',
                  minLength: {
                    value: 3,
                    message: 'Mağaza adı en az 3 karakter olmalıdır',
                  },
                })} />
              </label>
              {errors.store?.name && <p className="error-text xl:pl-[200px]">{errors.store.name.message}</p>}
            </div>

            <div className="flex flex-col">
              <label className="form-row">
                <span className="label-span">Telefon:</span>
                <input className="input-style" placeholder="Telefon" {...register('store.phone', {
                  required: 'Telefon zorunludur',
                  pattern: {
                    value: /^(\+90|0)?5\d{9}$/,
                    message: 'Geçerli bir Türkiye telefon numarası giriniz',
                  },
                })} />
              </label>
              {errors.store?.phone && <p className="error-text xl:pl-[200px]">{errors.store.phone.message}</p>}
            </div>

            <div className="flex flex-col">
              <label className="form-row">
                <span className="label-span">Vergi No:</span>
                <input className="input-style" placeholder="Vergi No" {...register('store.tax_no', {
                  required: 'Vergi no zorunludur',
                  pattern: {
                    value: /^T\d{4}V\d{6}$/,
                    message: 'Vergi no “TXXXXVXXXXXX” formatında olmalıdır',
                  },
                })} />
              </label>
              {errors.store?.tax_no && <p className="error-text xl:pl-[200px]">{errors.store.tax_no.message}</p>}
            </div>

            <div className="flex flex-col">
              <label className="form-row">
                <span className="label-span">Banka Hesabı (IBAN):</span>
                <input className="input-style" placeholder="IBAN" {...register('store.bank_account', {
                  required: 'IBAN zorunludur',
                  pattern: {
                    value: /^TR\d{2}\d{5}\d{16}$/,
                    message: 'Geçerli bir Türkiye IBAN numarası giriniz',
                  },
                })} />
              </label>
              {errors.store?.bank_account && <p className="error-text xl:pl-[200px]">{errors.store.bank_account.message}</p>}
            </div>
          </>
        )}

        <button type="submit" className="mt-4 px-6 py-2 border border-white text-white font-bold hover:bg-white hover:text-black transition">
          Kaydol
        </button>
      </form>
      <FooterSection />
    </div>
  )
}
